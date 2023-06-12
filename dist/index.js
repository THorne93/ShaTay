window.addEventListener("load", (event) => {
    const homeImg = document.getElementById("imghome");
    const chipBtn = document.getElementById("homelinkchip");
    const bandBtn = document.getElementById("homelinkband");
    const podBtn = document.getElementById("homelinkpod");
    chipBtn.addEventListener('mouseover', () => {
        homeImg.src = "img/homechip.jpg";
    });
    bandBtn.addEventListener('mouseover', () => {
        homeImg.src = "img/muffins.jpg";
    });
    podBtn.addEventListener('mouseover', () => {
        homeImg.src = "img/superfun.png";
    });
});
export {};
//# sourceMappingURL=index.js.map