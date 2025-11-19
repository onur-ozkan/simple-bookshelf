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

function renderBooks(searchTerm = '') {
    const list = document.getElementById('book-list');
    list.innerHTML = '';

    const term = searchTerm.toLowerCase();

    const filtered = booksWithIds.filter(book => {
        // Searching matches ANY field value.
        return Object.values(book).some(val =>
            String(val).toLowerCase().includes(term)
        );
    });

    document.getElementById('book-count').textContent = `${filtered.length} items`;

    if (filtered.length === 0) {
        list.innerHTML = `<tr><td colspan="7" style="color: var(--secondary-text); padding: 20px 0;">-- no matches found --</td></tr>`;
        return;
    }

    filtered.forEach(book => {
        const row = document.createElement('tr');
        // Add click handler for details.
        row.onclick = () => showDetails(book.id);

        row.innerHTML = `
             <td class="col-id">${String(book.id).padStart(3, '0')}</td>
             <td class="col-title">${book.title}</td>
             <td class="col-author">${book.author}</td>
             <td class="col-genre">[${book.genre}]</td>
             <td class="col-lang">${book.language}</td>
             <td class="col-edition">${book.edition}</td>
             <td class="col-print">${book.print}</td>
         `;
        list.appendChild(row);
    });
}

function showDetails(id) {
    const book = booksWithIds.find(b => b.id === id);
    if (!book) return;

    document.getElementById('m-title').textContent = book.title;
    document.getElementById('m-author').textContent = "by " + book.author;
    document.getElementById('m-orig-title').textContent = book.originalTitle;
    document.getElementById('m-year').textContent = book.year;
    document.getElementById('m-isbn').textContent = book.isbn;
    document.getElementById('m-genre').textContent = book.genre;
    document.getElementById('m-lang').textContent = book.language;
    document.getElementById('m-edition').textContent = book.edition;
    document.getElementById('m-print').textContent = book.print;
    document.getElementById('m-summary').textContent = book.summary;

    document.getElementById('detail-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('detail-modal').style.display = 'none';
}

initTheme();
renderBooks();

document.getElementById('search-input').addEventListener('input', (e) => {
    renderBooks(e.target.value);
});
