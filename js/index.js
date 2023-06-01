const id_mail = document.getElementById('mail');
const download_link = document.querySelector('.download_link');

download_link.addEventListener('click', (e) => {
    e.preventDefault();
    html2pdf(document.getElementById('id_container'));
})



id_mail.addEventListener('click', (e) => {
    e.preventDefault();
    
    copyToClipboard();
})

async function copyToClipboard() {
    const mail_url = document.getElementById('mail_url').innerText;

    const result = await navigator.clipboard.writeText(mail_url);
    console.log('copied');
}
