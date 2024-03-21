const membersUrl = "https://noahruppe.github.io/wdd230/chamber/data/members.json";

const title1 = document.querySelector('#title1');
const title2 = document.querySelector("#title2");
const title3 = document.querySelector('#title3');

const logo1 = document.querySelector('#logo1');
const logo2 = document.querySelector('#logo2');
const logo3 = document.querySelector('#logo3');

const statement1 = document.querySelector('#statement1');
const statement2 = document.querySelector('#statement2');
const statement3 = document.querySelector('#statement3');

async function getCompanies() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    const companies = data.companies;
    // Filter gold and silver membership companies
    const goldSilverCompanies = companies.filter(company => company.membership === "Gold" || company.membership === "Silver");
    // Randomly select 3 companies
    const selectedCompanies = getRandomElements(goldSilverCompanies, 3);
    // Display selected companies
    displayCompanies(selectedCompanies);
}

// Function to randomly select elements from an array
function getRandomElements(array, num) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Function to display selected companies
function displayCompanies(companies) {
    companies.forEach((company, index) => {
        const titleElement = document.querySelector(`#title${index + 1}`);
        const logoElement = document.querySelector(`#logo${index + 1}`);
        const statementElement = document.querySelector(`#statement${index + 1}`);

        titleElement.textContent = company.name;
        logoElement.src = company.imageurl;
        logoElement.style.width = "200px"; // Adjust the width as needed
        logoElement.style.height = "auto"; // Maintain aspect ratio
        statementElement.textContent = company.statement;

        if (company.name === "Attornys At Law, Benbow, Davidson & Martin, PC") {
            titleElement.style.fontSize = "30px"; // Set font size to 30px
            logoElement.style.width = "120px"
        }
        else if (company.name === "Carolina Roofing Pro's") {
            logoElement.style.width = "150px"
        }
    });
}

getCompanies();
