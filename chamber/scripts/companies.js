const membersUrl = "https://noahruppe.github.io/wdd230/chamber/data/members.json";

const theFile = document.querySelector('#the-file');

async function getCompanies() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    console.table(data.companies);
};

getCompanies();