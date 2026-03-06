const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
