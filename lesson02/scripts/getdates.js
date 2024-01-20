const options = {year: 'numeric'}
document.getElementById('currentYear').textContent =new Date().toLocaleDateString('en-US',options);


const modified = {day: 'numeric',month: 'numeric',year: 'numeric',hour: 'numeric', minute: 'numeric'}
let oLastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = oLastModified.toLocaleDateString('en-US',modified)