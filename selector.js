const colors = ["#96adfb", "#fbe496", "#fa96c1", "#96facf", "#b7fa96", "#fac496", "#96dcfa"];

window.addEventListener("mousedown", () => {
    var color = colors.shift();
    document.documentElement.style.setProperty("--highlight", color);
    colors.push(color);
});