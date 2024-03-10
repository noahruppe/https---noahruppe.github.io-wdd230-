const membersUrl = "https://noahruppe.github.io/wdd230/chamber/data/members.json";
        const theFile = document.querySelector('#the-file');

        async function getCompanies() {
            const response = await fetch(membersUrl);
            const data = await response.json();
            return data.companies;
        }

        const displayCompanies = (companies, layout) => {
            let thefile = document.createElement('article');
            thefile.classList.add(layout);

            companies.forEach(company => {
                let section = document.createElement('section');

                let companyDiv = document.createElement('div');
                if (layout === 'list') {
                    let className = company.name.replace(/\s+/g, '-').toLowerCase().replace(/['&]/g, '').replace(/[^\w-]/g, '');
                    companyDiv.classList.add(className);
                }

                let name = document.createElement('h2');
                name.textContent = company.name;

                let address = document.createElement('p');
                address.textContent = `Address: ${company.address}`;
                if (layout === 'list') {
                    address.classList.add('list-address');
                }

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
        }

        document.addEventListener('DOMContentLoaded', async () => {
            const companies = await getCompanies();
            displayCompanies(companies, 'grid');

            const change = document.querySelector('#grid');
            const list = document.querySelector('#list1');

            change.addEventListener('click', () => {
                theFile.innerHTML = ''; // Clear the existing content
                displayCompanies(companies, 'grid');
            });

            list.addEventListener('click', () => {
                theFile.innerHTML = ''; // Clear the existing content
                displayCompanies(companies, 'list');
            });
        });