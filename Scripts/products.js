const productsContainer = document.getElementById('products-container');

const products = [
  { id: 1, name: 'Glow Serum', price: 29.99, image: 'assets/images/product1.jpg' },
  { id: 2, name: 'Hydrating Moisturizer', price: 39.99, image: 'assets/images/product2.jpg' },
  { id: 3, name: 'SPF 50 Sunscreen', price: 19.99, image: 'assets/images/product3.jpg' },
  { id: 4, name: 'Face Wash', price: 15.99, image: 'assets/images/product4.jpg' },
];

function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
  });
}

function addToCart(productId) {
  alert(`Product ${productId} added to cart!`);
}

renderProducts();

// Add event listener for the DOM content loaded event
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
    loadProducts();
  });
  
  // Function to update the cart count based on localStorage
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
  }
  
  // Function to load products dynamically
  function loadProducts() {
    const products = [
      {
        id: 1,
        name: 'Glow Serum',
        image: 'https://www.thenaturalwash.com/cdn/shop/products/Product_ingredients_18.jpg?v=1655283891&width=493',
        price: 29.99,
      },
      {
        id: 2,
        name: 'Hydrating Moisturizer',
        image: 'https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg',
        price: 39.99,
      },
      {
        id: 3,
        name: 'SPF 50 Sunscreen',
        image: 'https://m.media-amazon.com/images/I/515qmIG0GoL._SY450_.jpg',
        price: 19.99,
      }
    ];
  
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productGrid.appendChild(productCard);
    });
  }
  
  // Function to add products to the cart
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = findProductById(productId);
    
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex === -1) {
      // If not, add the product to the cart
      cart.push({ ...product, quantity: 1 });
    } else {
      // If already in the cart, update the quantity
      cart[existingProductIndex].quantity++;
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
  }
  
  // Helper function to find product by ID
  function findProductById(id) {
    const products = [
      { id: 1, name: 'Glow Serum', price: 29.99 },
      { id: 2, name: 'Hydrating Moisturizer', price: 39.99 },
      { id: 3, name: 'SPF 50 Sunscreen', price: 19.99 },
    ];
    return products.find(product => product.id === id);
  }
  
// for interaction purpose
  document.getElementById("fetchDataBtn").addEventListener("click", async () => {
    try {
      // Call the API from your Glitch backend
      const response = await fetch("https://zealous-curvy-party.glitch.me");
      const data = await response.json();
      document.getElementById("userData").innerText = `Name: ${data.name}, Age: ${data.age}, Care Info: ${data.careInfo}`;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  });

  
  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page reload
    
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    try {
      // Send the form data to the Glitch backend
      const response = await fetch("https://your-glitch-project-name.glitch.me/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, message })
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  });