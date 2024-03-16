const shortBtn = document.querySelector(".btn-shortenUrl")

shortBtn.addEventListener("click", shortUrl)

function shortUrl() {
    const originalUrl = document.querySelector(".input").value
    const apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl)
    const textarea = document.querySelector("textarea")
    fetch(apiUrl)
    .then(response => response.text())
    .then(data => textarea.value = data)

}