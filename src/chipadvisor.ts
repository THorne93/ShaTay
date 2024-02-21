declare let map: google.maps.Map;


window.addEventListener("load", (event) => {
    var x = 100;
    const main = document.getElementById("main")
    const contentPane = document.getElementById("contentPane")

  

    function getChips() {
    fetch('chip-data1.json')
        .then((response) => response.json())
        .then((json) => json.forEach((item, i) => {

            setTimeout(() => {

                const li = document.createElement("li")
                li.classList.add("card")
                const container = document.getElementById("card-container")
                container.appendChild(li)

                const card = document.createElement("div")
                card.classList.add("square")
                
                li.appendChild(card)

                const icon = document.createElement("img")
                icon.src = item.icon
                card.appendChild(icon)
                icon.classList.add("pic")

                const title = document.createElement("h1")
                title.classList.add("h1")
                title.innerHTML = item.location[0].name
                card.appendChild(title)



                const url = document.createElement("a")
                url.href = item.url
                card.appendChild(url)

                card.addEventListener('click', (e) => {

                    contentPane.innerHTML='';
                    const text = document.createElement("p")
                    text.innerHTML = item.content
                    const location = item.location[0];
                    centerMap(parseFloat(location.lat), parseFloat(location.long));
                 
                    contentPane.appendChild(text)

                })
            }, i * x);
            
        }));

    }

    function centerMap(lat: number, lng: number) {
        if (map instanceof google.maps.Map) {
            
            map.panTo({ lat: lat, lng: lng });
            map.setZoom(15);
            
        } else {
            console.error('map is not an instance of google.maps.Map');
        }
    }

    getChips();

    if (x == 100) {
        x= 10
    }

    const cardContainer = document.getElementById('card-container');

    cardContainer.addEventListener('mousemove', function(event) {
        const containerRect = cardContainer.getBoundingClientRect();
        const mouseX = event.clientX - containerRect.left;
        const containerWidth = cardContainer.offsetWidth;
        
        if (mouseX < 60) { // Adjust this value as needed
            if (mouseX <30) {
                cardContainer.scrollLeft -= 20; // Scroll left
            }
            else cardContainer.scrollLeft -= 10;
        } else if (mouseX > containerWidth - 60) { // Adjust this value as needed
            if (mouseX > containerWidth - 30) {
                cardContainer.scrollLeft += 20;
            }
           else     cardContainer.scrollLeft += 10; // Scroll right
        }
    });
    
    




    // url.innerHTML = item.title
    // item.title.appendChild(url)




    // href = item.url



    // chipadvisor style
    // make card div
    // make title element (h1)
    // make icon img       (img)
    // add classes to elements
    // appendChild/innerhtml/src elements to div/page



})
