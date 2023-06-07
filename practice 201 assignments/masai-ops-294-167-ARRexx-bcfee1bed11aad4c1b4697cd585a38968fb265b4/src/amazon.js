function Listing(name, category, imageUrl, price) {
    (this.name = name),
    (this.category = category),
    (this.imageUrl = imageUrl),
    (this.price = price),
    (this.sold = false);
}

function getFormData() {
  let name = document.getElementById("name").value;
  let category = document.getElementById("category").value;
  let imageUrl = document.getElementById("image").value;
  let price = document.getElementById("price").value;
  addListing(name, category, imageUrl, price);
}

function addListing(input, category, image, price) {
  const listing = new Listing(input, category, image, price);
 
  const products = JSON.parse(localStorage.getItem("Products")) || [];

  products.push(listing);

  localStorage.setItem("Products", JSON.stringify(products));
  
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("image").value = "";
  document.getElementById("price").value = "";

  const successMessage = document.createElement("p");
  successMessage.textContent = "Product added successfully!";
  document.body.appendChild(successMessage);
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    getFormData(); // Call getFormData function
  });
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
