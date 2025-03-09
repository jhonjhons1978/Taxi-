const scriptURL = 'https://script.google.com/macros/s/AKfycbyZX1qD6cnl0LCH4solEKkZp8DWAuiNAl2CE5m6zvv9NfLw8GY4iaexmX7Q4gvy_PO_Mg/exec'
let now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
let stringDay = `${year}-${month}-${day}`;

const form = document.forms['contact-form']

form.addEventListener('submit', e => {

  e.preventDefault()

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

document.getElementById('date').setAttribute('min', stringDay);
