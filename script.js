// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar produtos ao carrinho
function addToCart(productName, productPrice) {
  const product = { name: productName, price: productPrice };
  cart.push(product);
  alert(`${productName} foi adicionado ao carrinho!`);
}

// Função para exibir o conteúdo do carrinho
function showCart() {
  const cartContainer = document.querySelector('.cart-items');
  cartContainer.innerHTML = '';

  cart.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <p>${item.name}</p>
      <p>R$ ${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remover</button>
    `;
    cartContainer.appendChild(itemElement);
  });

  // Exibir o total do carrinho
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  document.querySelector('.total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover um item do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  showCart();
}

// Função para limpar o carrinho
function clearCart() {
  cart = [];
  showCart();
}

// Função para alternar entre as seções de produtos e carrinho
function showSection(section) {
  const homeSection = document.getElementById('home');
  const cartSection = document.getElementById('cart');

  if (section === 'home') {
    homeSection.style.display = 'block';
    cartSection.style.display = 'none';
  } else if (section === 'cart') {
    homeSection.style.display = 'none';
    cartSection.style.display = 'block';
    showCart();
  }
}

// Inicializa a página exibindo a seção de produtos
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});
