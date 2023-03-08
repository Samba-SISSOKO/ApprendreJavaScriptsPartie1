
function getResult() {
    return document.getElementById("code-validation");
}
function activerBouton(disable) {
    if (disable) {
        document
            .getElementById("submit-btn")
            .setAttribute("disable", true);
    } else {
        document
            .getElementById("submit-btn")
            .removeAttribute("dissable");
    }
}
document
    .getElementById("code")
    .addEventListener("input", function (e) {
        if (/^SOULAKO/.test(e.target.value)) {
            getResult().textContent = "Code correcte"
            activerBouton(true);
        } else {
            getResult().textContent = "code incorrecte"
            activerBouton(false);
        }
    })