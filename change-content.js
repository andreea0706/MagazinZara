function showProduct() {
    var allProducts = document.getElementById("products");
    var image = document.getElementsByTagName("img");

    var newDiv = document.createElement("div");
    newDiv.classList.add('col-9');
    var div6 = document.createElement("div");
    var div3 = document.createElement("div");
    div6.classList.add('col-6');
    div3.classList.add('col-3');
    newDiv.appendChild(div6);
    newDiv.appendChild(div3);
    div6.appendChild(image[1]);
    allProducts.replaceWith(newDiv);
};

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}