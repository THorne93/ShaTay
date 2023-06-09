window.addEventListener("load", (event) => {
    const homeIMG = document.getElementById("imghome")
    const chipbtn = document.getElementById("homelinkchip")
    const bandbtn = document.getElementById("homelinkband")
    const podbtn = document.getElementById("homelinkpod")


    chipbtn.addEventListener('mouseover', () => {
        homeIMG.src = "img/homechip.jpg"
      })

      bandbtn.addEventListener('mouseover', () => {
        homeIMG.src = "img/muffins.jpg"
      })

      podbtn.addEventListener('mouseover', () => {
        homeIMG.src = "img/superfun.png"
      })
  
})
 