window.addEventListener("load", (event) => {
    fetch('chip-data1.json')
        .then((response) => response.json())
        .then((json) => json.forEach((item, i) => {
        setTimeout(() => {
            const card = document.createElement("div");
            card.classList.add("square");
            const app = document.getElementById("app");
            app.appendChild(card);
            const icon = document.createElement("img");
            icon.src = item.icon;
            card.appendChild(icon);
            icon.classList.add("pic");
            const title = document.createElement("h1");
            title.classList.add("h1");
            title.innerHTML = item.location[0].name;
            card.appendChild(title);
            const url = document.createElement("a");
            url.href = item.url;
            card.appendChild(url);
            card.addEventListener('click', (e) => {
                open(url.href, "_self");
            });
        }, i * 100);
    }));
    const ChooseCompanyCards = [
        {
            title: 'Nandos',
            url: 'https://chipsreviewforu.wordpress.com/2022/02/10/chip-review-56-kanival-burger-malaga-spain/',
            icon: './img/chipadvisor/nandos.jpg',
            href: 'tbc'
        },
        {
            title: 'Donner Haus',
            url: 'tbc',
            icon: './img/chipadvisor/donner haus.jpeg',
        },
        {
            title: 'Titchfield Mill',
            url: 'tbc',
            icon: './img/chipadvisor/titchfield.png',
        },
        {
            title: 'Kanival Burger',
            url: 'https://chipsreviewforu.wordpress.com/2022/02/10/chip-review-56-kanival-burger-malaga-spain/',
            icon: './img/chipadvisor/kanival.jpeg',
        },
    ];
    // url.innerHTML = item.title
    // item.title.appendChild(url)
    // href = item.url
    // chipadvisor style
    // make card div
    // make title element (h1)
    // make icon img       (img)
    // add classes to elements
    // appendChild/innerhtml/src elements to div/page
});
export {};
//# sourceMappingURL=chipadvisor.js.map