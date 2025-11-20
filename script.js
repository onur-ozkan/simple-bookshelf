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

const booksWithIds = BOOKS.map((book, index) => ({
    id: index + 1,
    ...book
}));

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

const searchTextCache = new Map();

function buildSearchableText(book) {
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
        book['isbn-13'],
        book.summary
    ];

    return fields
        .filter(Boolean)
        .map(value => String(value).toLowerCase())
        .join(' | ');
}

function getSearchText(book) {
    if (!searchTextCache.has(book.id)) {
        searchTextCache.set(book.id, buildSearchableText(book));
    }
    return searchTextCache.get(book.id);
}

function matchesSearch(book, term) {
    if (!term) return true;

    return getSearchText(book).includes(term);
}

function renderBooks(searchTerm = '') {
    const list = document.getElementById('book-list');
    list.innerHTML = '';

    const term = searchTerm.toLowerCase().trim();

    const filtered = booksWithIds.filter(book => matchesSearch(book, term));

    document.getElementById('book-count').textContent = `${filtered.length} items`;

    if (filtered.length === 0) {
        list.innerHTML = `<tr><td colspan="6" style="color: var(--secondary-text); padding: 20px 0;">-- no matches --</td></tr>`;
        return;
    }

    filtered.forEach(book => {
        const row = document.createElement('tr');
        // Add click handler for details.
        row.onclick = () => showDetails(book.id);

        const authorDisplay = formatAuthorPreview(book['written-by']);
        const genreDisplay = formatGenrePreview(book.genre);

        row.innerHTML = `
             <td class="col-title">${book.title}</td>
             <td class="col-written-by">${authorDisplay}</td>
             <td class="col-genre">${genreDisplay}</td>
             <td class="col-lang">${book.language}</td>
             <td class="col-isbn">${book['isbn-13']}</td>
         `;
        list.appendChild(row);
    });
}

function showDetails(id) {
    const book = booksWithIds.find(b => b.id === id);
    if (!book) return;

    window.location.hash = `${book['isbn-13']}`;

    document.getElementById('m-title').textContent = book.title;
    document.getElementById('m-author').textContent = formatAuthors(book['written-by'], { includePrefix: true });
    document.getElementById('m-orig-title').textContent = book['original-title'];
    document.getElementById('m-orig-lang').textContent = book['original-language'];
    document.getElementById('m-published-year').textContent = book['originally-published'];
    document.getElementById('m-print-year').textContent = book['print-year'];
    document.getElementById('m-isbn').textContent = book['isbn-13'];
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
        const book = booksWithIds.find(b => b['isbn-13'] === isbn);
        if (book) {
            showDetails(book.id);
        }
    } else {
        // If there is no ISBN in the hash but the modal is open, close it.
        if (document.getElementById('detail-modal').style.display === 'flex') {
            closeModal();
        }
    }
}

initTheme();
renderBooks();
handleRouting();

document.getElementById('search-input').addEventListener('input', (e) => {
    renderBooks(e.target.value);
});

window.addEventListener('hashchange', handleRouting);
