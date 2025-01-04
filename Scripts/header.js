
window.onload=function(){
const products=[
{
    imageUrl:"https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
    name:"Glow Serum",
    price:"Rs.380"
},
{
    imageUrl:"https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
    name:"Glow Serum",
    price:"Rs.380"
},
{
    imageUrl:"https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
    name:"Glow Serum",
    price:"Rs.380"
},
{
    imageUrl:"https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
    name:"Glow Serum",
    price:"Rs.380"
},
{
    imageUrl:"https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
    name:"Glow Serum",
    price:"Rs.380"
},
{
    imageUrl:"https://images-static.nykaa.com/media/catalog/product/f/4/f455af8CERAV00000001a_1.jpg",
    name:"Glow Serum",
    price:"Rs.380"
}
];
const productList=document.getElementById("productList");

products.forEach(product=>{
    const productDiv=document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML=`
      <h3>${product.name}</h3>
      <img src="${product.imageUrl}" alt="${product.name}" style="width: 150px; height: 150px;">
      <p>${product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
       <button onclick="addToCart(2)">Add to Cart</button>
        <button onclick="addToWishlist(2)">Add to Wishlist</button>
    `;

    productList.appendChild(productDiv);
});
};

// Function to handle "Add to Cart"
function addToCart(productId) {
    const product = findProductById(productId);
    if (product && !cart.some(item => item.id === productId)) {
      cart.push(product);
      alert(`${product.name} has been added to your cart!`);
      console.log("Cart:", cart); // For debugging
    } else {
      alert(`${product.name} is already in your cart!`);
    }
  }
  
  // Function to handle "Add to Wishlist"
  function addToWishlist(productId) {
    const product = findProductById(productId);
    if (product && !wishlist.some(item => item.id === productId)) {
      wishlist.push(product);
      alert(`${product.name} has been added to your wishlist!`);
      console.log("Wishlist:", wishlist); // For debugging
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  }
  
  // Helper function to find a product by ID
  function findProductById(productId) {
    const products = [
      { id: 1, name: "Glow Serum", description: "A brightening serum.", price: "$30", imageUrl: "https://via.placeholder.com/150?text=Glow+Serum" },
      { id: 2, name: "Hydrating Cream", description: "Deep hydration.", price: "$40", imageUrl: "https://via.placeholder.com/150?text=Hydrating+Cream" },
      { id: 3, name: "Vitamin C Mask", description: "A rejuvenating mask.", price: "$25", imageUrl: "https://via.placeholder.com/150?text=Vitamin+C+Mask" }
    ];
  
    return products.find(product => product.id === productId);
  }

  function updateCartDisplay() {
    const cartListDiv = document.getElementById("cartList");
    cartListDiv.innerHTML = ""; // Clear previous content
    cart.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.textContent = `${item.name} - ${item.price}`;
      cartListDiv.appendChild(itemDiv);
    });
  }
  
  function updateWishlistDisplay() {
    const wishlistListDiv = document.getElementById("wishlistList");
    wishlistListDiv.innerHTML = ""; // Clear previous content
    wishlist.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.textContent = `${item.name} - ${item.price}`;
      wishlistListDiv.appendChild(itemDiv);
    });
  }
  
  // Modify addToCart and addToWishlist to update displays
  function addToCart(productId) {
    const product = findProductById(productId);
    if (product && !cart.some(item => item.id === productId)) {
      cart.push(product);
      alert(`${product.name} has been added to your cart!`);
      updateCartDisplay(); // Update cart display
    } else {
      alert(`${product.name} is already in your cart!`);
    }
  }
  
  function addToWishlist(productId) {
    const product = findProductById(productId);
    if (product && !wishlist.some(item => item.id === productId)) {
      wishlist.push(product);
      alert(`${product.name} has been added to your wishlist!`);
      updateWishlistDisplay(); // Update wishlist display
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  }
  