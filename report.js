document.getElementById("changeColorBtn").addEventListener("click", function () {
    const colors = ["#f5f5f5", "#ffe4e1", "#e0ffff", "#fafad2", "#d8bfd8"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});