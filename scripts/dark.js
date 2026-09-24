// Finds the dark mode button in the header
const darkbtn = document.querySelector('#dark')

// Uses the whole page body so dark mode can change the entire page
const darkel = document.body

// Checks if the user already chose dark mode before
if (localStorage.getItem('theme') === 'dark') {
    // Adds the dark class when the page loads
    darkel.classList.add('dark');
}

// Runs this code when the dark mode button is clicked
darkbtn.addEventListener('click', () => {

    // Turns dark mode on or off
    const isDark = darkel.classList.toggle('dark');

    // Shows true or false in the browser console for testing
    console.log(isDark)

    // Saves the user's choice so it stays after refreshing the page
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});