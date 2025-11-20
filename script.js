const THEME_KEY = 'library_theme_pref';

function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // No saved preference, align with system setting.
        document.body.classList.add('dark-theme');
    }
}

function switchTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

function formatAuthors(writtenByField = {}) {
    if (!writtenByField) return '';

    const list = Array.isArray(writtenByField)
        ? writtenByField
        : [{ name: String(writtenByField), role: '' }];

    const formatted = list
        .filter(person => person && person.name)
        .map(person => {
            const role = person.role ? ` (${person.role})` : '';
            return `${person.name}${role}`;
        })
        .join(', ');

    if (!formatted) return '';
    return formatted;
}

function formatGenres(genreField) {
    if (!genreField) return '';
    const list = Array.isArray(genreField) ? genreField : [genreField];
    return list.filter(Boolean).join(', ');
}

function formatAuthorPreview(writtenByField = {}) {
    if (!writtenByField) return '';

    const list = Array.isArray(writtenByField)
        ? writtenByField.filter(person => person && person.name)
        : [{ name: String(writtenByField), role: '' }];

    if (!list.length) return '';

    const first = list[0];
    let display = first.name;
    if (first.role) display += ` (${first.role})`;

    if (list.length > 1) display += ', ...';
    return display;
}

function formatGenrePreview(genreField) {
    if (!genreField) return '';

    const list = Array.isArray(genreField)
        ? genreField.filter(Boolean)
        : [genreField];

    if (!list.length) return '';

    let display = list[0];
    if (list.length > 1) display += ', ...';
    return display;
}

function buildSearchableText(book, isbn) {
    const fields = [
        book.title,
        book['original-title'],
        formatAuthors(book['written-by']),
        formatGenres(book.genre),
        book.language,
        book['original-language'],
        book.publisher,
        book.edition,
        book['originally-published'],
        book['print-year'],
        isbn,
        book.summary
    ];

    return fields
        .filter(Boolean)
        .map(value => String(value).toLowerCase())
        .join(' ');
}

function precomputeSearchText() {
    BOOKS.forEach((book, isbn) => {
        Object.defineProperty(book, '__searchText', {
            value: buildSearchableText(book, isbn),
            enumerable: false
        });
    });
}

function matchesSearch(book, tokens, isbn) {
    if (!tokens.length) return true;
    const searchText = book.__searchText || buildSearchableText(book, isbn);
    return tokens.every(token => searchText.includes(token));
}

function renderBooks(searchTerm = '') {
    const list = document.getElementById('book-list');
    list.innerHTML = '';

    const tokens = searchTerm
        .toLowerCase()
        .split(/\s+/)
        .filter(Boolean);

    const filtered = [];
    BOOKS.forEach((book, isbn) => {
        if (matchesSearch(book, tokens, isbn)) filtered.push({ isbn, book });
    });

    document.getElementById('book-count').textContent = `${filtered.length} items`;

    if (filtered.length === 0) {
        list.innerHTML = `<tr><td colspan="6" style="color: var(--secondary-text); padding: 20px 0;">-- no matches --</td></tr>`;
        return;
    }

    filtered.forEach(({ book, isbn }) => {
        // Click handler for details.
        const row = document.createElement('tr');
        row.onclick = () => showDetails(isbn);

        const href = `#${isbn}`;
        const authorDisplay = formatAuthorPreview(book['written-by']);
        const genreDisplay = formatGenrePreview(book['genre']);

        row.innerHTML = `
             <td class="col-title">
                 <a class="book-link" href="${href}" onclick="event.stopPropagation();">${book.title}</a>
             </td>
             <td class="col-written-by">
                 <a class="book-link" href="${href}" onclick="event.stopPropagation();">${authorDisplay}</a>
             </td>
             <td class="col-genre">
                 <a class="book-link" href="${href}" onclick="event.stopPropagation();">${genreDisplay}</a>
             </td>
             <td class="col-lang">
                 <a class="book-link" href="${href}" onclick="event.stopPropagation();">${book.language}</a>
             </td>
             <td class="col-isbn">
                 <a class="book-link" href="${href}" onclick="event.stopPropagation();">${isbn}</a>
             </td>
         `;
        list.appendChild(row);
    });
}

function showDetails(isbn) {
    const book = BOOKS.get(isbn);
    if (!book) return;

    window.location.hash = isbn;

    document.getElementById('m-title').textContent = book.title;
    document.getElementById('m-author').textContent = formatAuthors(book['written-by'], { includePrefix: true });
    document.getElementById('m-orig-title').textContent = book['original-title'];
    document.getElementById('m-orig-lang').textContent = book['original-language'];
    document.getElementById('m-published-year').textContent = book['originally-published'];
    document.getElementById('m-print-year').textContent = book['print-year'];
    document.getElementById('m-isbn').textContent = isbn;
    document.getElementById('m-genre').textContent = formatGenres(book.genre);
    document.getElementById('m-lang').textContent = book.language;
    document.getElementById('m-publisher').textContent = book.publisher;
    document.getElementById('m-edition').textContent = book.edition;
    document.getElementById('m-summary').textContent = book.summary;

    document.getElementById('detail-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detail-modal').style.display = 'none';
    window.location.hash = '';
}

function handleRouting() {
    const hash = window.location.hash;
    // Remove '#'
    const isbn = hash.substring(1);

    if (isbn) {
        showDetails(isbn);
    } else {
        // If there is no ISBN in the hash but the modal is open, close it.
        if (document.getElementById('detail-modal').style.display === 'flex') {
            closeModal();
        }
    }
}

initTheme();
precomputeSearchText();
renderBooks();
handleRouting();

document.getElementById('search-input').addEventListener('input', (e) => {
    renderBooks(e.target.value);
});

window.addEventListener('hashchange', handleRouting);
