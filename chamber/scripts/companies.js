const membersUrl = "https://noahruppe.github.io/wdd230/chamber/data/members.json";

const theFile = document.querySelector('#the-file');

async function getCompanies() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayCompanies(data.companies);
};

 const displayCompanies = (companies) =>{
    let thefile =document.createElement('section');
    companies.forEach(company =>{
        let companyDiv = document.createElement('div');
        companyDiv.classList.add("companies");

        let name = document.createElement('h2');
        name.textContent = company.name;

        let address = document.createElement('p');
        address.textContent = company.address;

        let phone = document.createElement('p');
        phone.textContent = company.phone;

        let url = document.createElement('a');
        url.textContent = company.url;
        url.href = company.url;
        url.target = "_blank";

        let image =document.createElement('img');
        image.src = company.imageurl;

        membership = document.createElement('p');
        membership.textContent = `Membership ${company.membership}`;

        let scope =document.createElement('p');
        scope.textContent = `Scope ${company.scope}`;

        companyDiv.appendChild(name);
        companyDiv.appendChild(address);
        companyDiv.appendChild(phone);
        companyDiv.appendChild(url);
        companyDiv.appendChild(image);
        companyDiv.appendChild(membership);
        companyDiv.appendChild(scope);

        thefile.appendChild(companyDiv);
    })
 }



getCompanies();