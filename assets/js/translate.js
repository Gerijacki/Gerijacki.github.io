document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById("languageSelect");

    languageSelect.addEventListener("change", function() {
        const selectedLanguage = languageSelect.value;
        window.location.href = selectedLanguage;
    });

    if (!window.location.href.includes("index.html") &&
        !window.location.href.includes("index_es.html") &&
        !window.location.href.includes("index_en.html")) {
        window.location.href = "index.html";
    }
});
