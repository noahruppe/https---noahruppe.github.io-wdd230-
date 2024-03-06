const baseUrl = "https://github.com/noahruppe/wdd230";

const linksUrl = "https://github.com/noahruppe/wdd230/blob/main/data/links.json";

const cards = document.querySelector('#cards');

async function getLinks(){
    const response = await fetch(baseUrl+linksUrl);
    const data = await response.json();
    console.log(data);
}

getLinks();