let products = [];
let productId = 1;

const form = document.getElementById("productForm");
const container = document.getElementById("productsContainer");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const description = document.getElementById("productDescription").value;

  const product = {
    id: productId++,
    name: name,
    price: price,
    description: description,
  };

  products.push(product);
  renderProducts();
  form.reset();
});

function renderProducts() {
  container.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    const productInfo = document.createElement("div");

    productInfo.innerHTML = `<p><strong>${product.name}</strong> - $${product.price}</p>
      <p>${product.description}</p>`;

    const deleBtn = document.createElement("button");
    deleBtn.textContent = "Eliminar";

    deleBtn.addEventListener("click", () => deleteProduct(product.id));

    productDiv.appendChild(productInfo);
    productDiv.appendChild(deleBtn);

    container.appendChild(productDiv);
  });
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  renderProducts();
}
