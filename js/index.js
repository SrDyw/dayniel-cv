const id_mail = document.getElementById("mail");
const download_link = document.querySelector(".download_link");

download_link.addEventListener("click", (e) => {
    e.preventDefault();
    html2pdf(document.getElementById("id_container"));
});

const preventDefault = document.querySelectorAll("preventDefault");

preventDefault.forEach((element) => {
    element.addEventListener("click", (e) => e.preventDefault());
});

async function copyToClipboard(data) {
    // const mail_url = document.getElementById('mail_url').innerText;

    const result = await navigator.clipboard.writeText(data);

    const clipanim = document.querySelector(".clipboard_alert");
    
    if (!clipanim.classList.contains("animation")) {
        clipanim.classList.add("animation");
        setTimeout(() => {
            console.log("end Animatino");
            clipanim.classList.remove("animation");
        }, 2000);
    }
}
