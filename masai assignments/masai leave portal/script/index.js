// get data
let leaveArr = JSON.parse(localStorage.getItem('leave')) || [];


// first we will select the form 
const form = document.getElementById('leave-form');

form.addEventListener('submit', function (event) {

  alert("register done");
  window.location.href = "../html/dashboard.html";
  event.preventDefault() //it will stop the form to reloading 
  // getting form data
  const unique = document.getElementById('id').value;
  const name = document.getElementById('name').value;
  const reason = document.getElementById('reason').value;
  const designation = document.querySelector('input[name="designation"]:checked').value;
  const start_date = document.getElementById('start-date').value;
  const end = document.getElementById('end-date').value;
  const overseer = document.getElementById('overseer').value;

  let obj = { unique, name, reason, designation, start_date, end, overseer }

  leaveArr.push(obj);
  localStorage.setItem('leave', JSON.stringify(leaveArr))

})



