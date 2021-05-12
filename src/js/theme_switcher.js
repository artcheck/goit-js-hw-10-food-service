const checkBoxRef = document.querySelector('.theme-switch__toggle');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

checkBoxRef.addEventListener('change', changeTheme);

function changeTheme(e) {
    if (e.target.checked) {

        updateLocalStorage('Theme', Theme.DARK);
        updateThemes(Theme.LIGHT, Theme.DARK);
    } else {

        updateLocalStorage('Theme', Theme.LIGHT);
        updateThemes(Theme.DARK, Theme.LIGHT);
    }
}

function updateThemes(oldTheme, newTheme) {
    document.body.classList.add(newTheme);
    document.body.classList.remove(oldTheme);
}

function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
