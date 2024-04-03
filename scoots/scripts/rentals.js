header = document.querySelector("header");

header.style.marginTop = "0px";

const membersUrl = "https://noahruppe.github.io/wdd230/scoots/data/data.json";

async function getRentals() {
  const response = await fetch(membersUrl);
  const data = await response.json();
  console.log(data.rentals);
  displayRentals(data.rentals);
}

const rentalTable = document.querySelector("table");

const displayRentals = (rentals) => {
  rentalTable.innerHTML = "";

  const maxPricingRow = document.createElement("tr");
  maxPricingRow.innerHTML = `
        <td style="background-color: navy; text-align: center;" colspan="6"><span style="color: #ffffff; font-size: 14pt;"><strong>Max Rental Pricing</strong></span></td>
    `;
  rentalTable.appendChild(maxPricingRow);

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
            <td><strong>Rental Type</strong></td>
            <td><strong>Max. Persons</strong></td>
            <td><strong>Reservation Half Day (3 hrs)</strong></td>
            <td><strong>Reservation Full Day</strong></td>
            <td><strong>Walk-In Half Day (3 hrs)</strong></td>
            <td><strong>Walk-In Full Day</strong></td>
        `;
  rentalTable.appendChild(headerRow);

  rentals.forEach((rental) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                <td>${rental["Rental Type"]}</td>
                <td>${rental["Max Person"]}</td>
                <td>${rental.Reservation[0]["Half Day (3 hours)"]}</td>
                <td>${rental.Reservation[0]["Full Day"]}</td>
                <td>${rental["Walk in"][0]["Half Day (3 hours)"]}</td>
                <td>${rental["Walk in"][0]["Full Day"]}</td>
            `;
    rentalTable.appendChild(row);
  });
};

getRentals();


