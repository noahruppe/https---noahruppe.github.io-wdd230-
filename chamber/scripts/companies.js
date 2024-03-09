const membersUrl = "https://noahruppe.github.io/wdd230/chamber/data/members.json";

const theFile = document.querySelector('#the-file');


async function getCompanies() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayCompanies(data.companies);
};

const displayCompanies = (companies) => {
    let thefile = document.createElement('article');
    let layout = "grid"
    thefile.classList.add(layout);

    companies.forEach(company => {
        let section = document.createElement('section');

        let companyDiv = document.createElement('div');
        let className = company.name.replace(/\s+/g, '-').toLowerCase().replace(/['&]/g, '').replace(/[^\w-]/g, '');
        companyDiv.classList.add(className);

        let name = document.createElement('h2');
        name.textContent = company.name;

        let address = document.createElement('p');
        address.classList.add('address')
        address.textContent = `Address: ${company.address}`;

        let phone = document.createElement('p');
        phone.textContent = `Phone: ${company.phone}`;

        let url = document.createElement('a');
        url.textContent = `${company.url}`;
        url.href = company.url;
        url.target = "_blank";

        let image = document.createElement('img');
        image.src = company.imageurl;

        let membership = document.createElement('p');
        membership.textContent = `Membership: ${company.membership}`;

        let scope = document.createElement('p');
        scope.classList.add('scope')
        scope.textContent = `Scope: ${company.scope}`;

        companyDiv.appendChild(name);
        companyDiv.appendChild(address);
        companyDiv.appendChild(phone);
        companyDiv.appendChild(url);
        companyDiv.appendChild(image);
        companyDiv.appendChild(membership);
        companyDiv.appendChild(scope);

        section.appendChild(companyDiv);
        thefile.appendChild(section);
    });
    theFile.appendChild(thefile);

    const change = document.querySelector('#grid');
    const list = document.querySelector('#list1');

    change.addEventListener('click', () => {
        layout = 'grid';
        thefile.className = layout;
    });

    list.addEventListener('click', () => {
        layout = 'list';
        thefile.className = layout;
    });
}

getCompanies();

//----------------this is the grid and list layouts


// const change = document.querySelector('#grid');
//     const palit = document.querySelector('.grid');
//     const list = document.querySelector('#list1')
//     change.addEventListener('click',()=>{
//         palit.classList.toggle('grid');
//     })

//     list.addEventListener('click', ()=>{
//         palit.classList.toggle('list');
//     })