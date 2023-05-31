window.addEventListener("load", (event) => {

    const greet = document.getElementById("greeting")

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

})