const download_link = document.querySelector('.download_link');

download_link.addEventListener('click', (e) => {
    e.preventDefault();
    html2pdf(document.getElementById('id_container'));
})

