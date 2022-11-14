const cookies = documents.getELementById("cookies-settings");
const improve = documents.querySelector("improvement");




const solving = () => {
    cookies.addEventListener("click", function() {
        improve.style.display = "none";
    })
}