window.addEventListener("load", (event) => {
    const homeImg = document.getElementById("imghome") as HTMLImageElement
    const chipBtn = document.getElementById("homelinkchip") as HTMLAnchorElement
    const bandBtn = document.getElementById("homelinkband") as HTMLAnchorElement
    const podBtn = document.getElementById("homelinkpod") as HTMLAnchorElement


    chipBtn.addEventListener('mouseover', () => {
        homeImg.src = "img/homechip.jpg"
      })

      bandBtn.addEventListener('mouseover', () => {
        homeImg.src = "img/muffins.jpg"
      })

      podBtn.addEventListener('mouseover', () => {
        homeImg.src = "img/superfun.png"
      })

})