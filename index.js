let images = ['200w.webp', '200w2.webp', 'bugge_frå_insta_lowres.jpeg', 'giphy.gif', 'giphy2.webp', 'images.jfif', 'saeralpakka.jpg'];

window.onload = e => {
    handleRandomAlpaccaLoad();
}

let handleRandomAlpaccaLoad = () => {
    let alpakkaBeholdere = Array.from(document.getElementsByClassName('alpakka-beholder'));
    console.log(alpakkaBeholdere);
    alpakkaBeholdere.forEach(alpakkaBeholder => {
        setRandomAlpacca(alpakkaBeholder);
    });
}

let setRandomAlpacca = alpakkaBeholder => {
    console.log(alpakkaBeholder);
    let tilfeldigAlpakka = alpakkaBeholder.getElementsByClassName('tilfeldig-alpakka')[0];
    let imageName = images[Math.floor(Math.random() * images.length)];
    tilfeldigAlpakka.src = `./images/${imageName}`;
}