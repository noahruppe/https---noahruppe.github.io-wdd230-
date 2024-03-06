const baseUrl = "https://noahruppe.github.io/wdd230/";
const linksUrl = "https://noahruppe.github.io/wdd230/data/links.json";

const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        lesson.links.forEach((linkData) => {                           //from this line down I had help with chat gpt  
            let card = document.createElement("section");
            let link = document.createElement("a");

            link.setAttribute('href', baseUrl + linkData.url);
            link.textContent = linkData.title;

            card.appendChild(link);
            cards.appendChild(card);
        });
    });
};

getLinks();
