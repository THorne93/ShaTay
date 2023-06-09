window.addEventListener("load", (event) => {

    const greet = document.getElementById("greeting")
   const homeIMG = document.getElementById("imghome")
    const chipbtn = document.getElementById("homelinkchip")
    const bandbtn = document.getElementById("homelinkband")
    const podbtn = document.getElementById("homelinkpod")

    const homepic = [
        "homechip.jpg",


    ]

    const t = new Date();
    let hour = t.getUTCHours() + 1;
    if(hour > 0 && hour < 12) {
        greet.innerHTML = "Good Morning"
    }
    else if(hour >= 12 && hour <= 18) {
        greet.innerHTML = "Good Afternoon"
    }
    else {
        greet.innerHTML = "Good Evening"
    }

    chipbtn.addEventListener('hover', () => {
        chipchange()
      })

    function chipchange (){
        homeIMG.src = "homechip.jpg"
    }

})
 