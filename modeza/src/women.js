// Import women's products from the JSON file
import products from './products.json';  // Ensure this path is correct

// Get the container and template from the DOM
const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

// Function to display women's products
const showWomenProducts = () => {
    // Filter products by the "women" category
    const womenProducts = products.filter((product) => product.category.toLowerCase() === 'women');

    if (!womenProducts || womenProducts.length === 0) {
        console.error("No women's products to display");
        return;
    }

    // Loop through each product and display it
    womenProducts.forEach((product) => {
        const { id, name, category, price, stock, image } = product;
        
        // Clone the product template
        const productClone = document.importNode(productTemplate.content, true);

        // Update the template with product data
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productCategory").textContent = category;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;

        // Add event listener for the "Add to Cart" button
        productClone.querySelector(".add-to-cart-button").addEventListener("click", () => {
            addToCart(product);  // Pass the product to the addToCart function
        });

        // Append the product to the container
        productContainer.appendChild(productClone);
    });
};

// Function to handle adding products to the cart
const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1;  // Increment quantity if product already in cart
    } else {
        cart.push({ ...product, quantity: 1 });  // Add new product to cart
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optional: Show a message when the product is added
    alert(`${product.name} added to the cart!`);
};

// Call the function to display the products on page load
showWomenProducts();
