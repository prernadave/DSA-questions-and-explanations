let leaveArr = JSON.parse(localStorage.getItem("leave")) || [];
const designationFilter = document.getElementById("designation-filter");
const modal = document.getElementById('otp-modal');
const nameSearch = document.getElementById("search-box");


// Function to generate random OTP
function generateOTP() {
  let otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}

// display function table
function displayLeave(data) {
  let leave_port = document.getElementById("leave_port");

  while (leave_port.rows.length > 1) {
    leave_port.deleteRow(-1);
  }

  data.forEach((el, i) => {
  
    // row
    let tr = document.createElement("tr");


    // table data
    let td1 = document.createElement("td");
    td1.innerText = el.unique;

    let td2 = document.createElement("td");
    td2.innerText = el.name;

    let td3 = document.createElement("td");
    td3.innerText = el.designation;

    let td4 = document.createElement("td");
    td4.innerText = el.reason;

    let td5 = document.createElement("td");
    td5.innerText = el.start_date;

    let td6 = document.createElement("td");
    td6.innerText = el.end;

    let td7 = document.createElement("td");
    td7.innerText = el.overseer;


    // otp
    let td8 = document.createElement("td");
    let otpg =  generateOTP()
    td8.textContent = otpg;
    el.otp = otpg;

// reject
    let reject = document.createElement('button')
    reject.innerText = "Reject";
    reject.style.background="red"
    reject.addEventListener('click', () => {
      let confirmReject = confirm("Are you sure? you want to reject the request.")
      if (confirmReject) {
        data.splice(i, 1)
    
        localStorage.setItem('leavedataafterreject', JSON.stringify(data))
       
        displayLeave(data)
      }
    })



    // ========================================GRANT===============================================================

    let grant = document.createElement('button')
    grant.innerText = "Grant";
    grant.style.backgroundColor="green"
    grant.setAttribute('class', "butt")
    let gb = document.getElementsByClassName('butt')
    console.log(gb);
    Array.from(gb).forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the row data
        const row = this.closest('tr');
        const name = row.querySelector('.name')
        const days = row.querySelector('.days')
        const otp = row.querySelector('.otp')
        console.log(otp);

        // Set the data in the modal
        const nameField = modal.querySelector('.name');
        // console.log(nameField);
        const daysField = modal.querySelector('.days');
        const otpField = modal.querySelector('.otp-input');
        const confirmBtn = modal.querySelector('.confirm-btn');

        nameField.textContent = el.name;
        daysField.textContent = el.days;
        otpField.value = '';

        confirmBtn.addEventListener('click', function (event) {
          event.preventDefault();

          // Get the entered OTP
          const enteredOtp = otpField.value;
          // console.log(enteredOtp,el.otp)
          if (enteredOtp == otp) {
            // OTP is correct, remove the row from the table
            row.remove();
            modal.style.display = 'none';
          } else {
            // OTP is incorrect, show an error message
            const errorMessage = modal.querySelector('.error-message');
            errorMessage.textContent = 'Incorrect OTP, please try again.';
          }
        });

        // Display the OTP modal
        modal.style.display = 'block';
      });
    });

    // When the user clicks on the close button or outside the modal, close the modal
    const closeBtn = modal.querySelector('.close-btn');
    const overlay = modal.querySelector('.overlay');

    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });


    tr.append(td1, td2, td4, td3, td5, td6, td7, td8, reject, grant);
    document.querySelector("tbody").append(tr);
  });

  
}
displayLeave(leaveArr);

