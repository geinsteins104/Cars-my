// mendapatkan element yang akan menangani perubahan tema
const getToggle = document.getElementById('icon-moon');

// membuat event handler untuk mengubah tema

function isDarkMode() {
    const getElementBody = document.body;
    if (getElementBody.className === 'dark-theme') {
        getElementBody.className = '';
        getToggle.src = 'IMAGE/Sun-removebg-preview.png';

    } else {
        getElementBody.className = 'dark-theme';
        getToggle.src = 'IMAGE/Moon-removebg-preview.png';
    }
}
// menjalankan event handler menggunakan evnet listener
getToggle.addEventListener('click', isDarkMode);