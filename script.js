const products = [
  { id: 1, name: "هاتف ذكي", price: 5000, img: "https://via.placeholder.com/200" },
  { id: 2, name: "لابتوب", price: 15000, img: "https://via.placeholder.com/200" },
  { id: 3, name: "سماعة", price: 800, img: "https://via.placeholder.com/200" },
  { id: 4, name: "ساعة ذكية", price: 1200, img: "https://via.placeholder.com/200" }
];

let cart = [];

const productsDiv = document.getElementById('products');
const cartCount = document.getElementById('cartCount');

function renderProducts(list) {
  productsDiv.innerHTML = '';
  list.forEach(p => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${p.img}" />
        <h3>${p.name}</h3>
        <p>${p.price} جنيه</p>
        <button onclick="addToCart(${p.id})">أضف للسلة</button>
      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(id);
  cartCount.innerText = cart.length;
  alert('تمت الإضافة للسلة');
}

document.getElementById('search').addEventListener('input', e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  renderProducts(filtered);
});

renderProducts(products);
