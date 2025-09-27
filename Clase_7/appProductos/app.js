/* ********************************** OPCION 1 *********************************/

/* let products = [];
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
 */

/*********************** OPCION 2: RENDERIZADO INCREMENTAL ***************************/

let products = [];
let productId = 1;

const form = document.getElementById("productForm");
const container = document.getElementById("productsContainer");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const description = document.getElementById("productDescription").value;

  const product = {
    id: productId++,
    name,
    price,
    description,
  };

  products.push(product);
  renderProduct(product); // 🔹 Solo renderizamos el nuevo
  form.reset();
});

function renderProduct(product) {
  const productDiv = document.createElement("div");
  productDiv.dataset.id = product.id; // 🔹 identificador para luego borrarlo

  productDiv.innerHTML = `
    <div>
      <p><strong>${product.name}</strong> - $${product.price}</p>
      <p>${product.description}</p>
      <button>Eliminar</button>
    </div>
  `;

  // Asignamos el evento al botón eliminar
  productDiv.querySelector("button").addEventListener("click", () => {
    deleteProduct(product.id);
  });

  container.appendChild(productDiv);
}

function deleteProduct(id) {
  // Eliminamos del array
  products = products.filter((product) => product.id !== id);

  // 🔹 Eliminamos solo el nodo correspondiente
  const productDiv = container.querySelector(`[data-id="${id}"]`);
  if (productDiv) productDiv.remove();
}
