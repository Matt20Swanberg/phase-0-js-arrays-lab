// Write your code here
let products = [];

products.push("Laptop", "Phone", "Headphones", "Monitor");

// Output first item in array
function logFirstProduct(){
console.log(products[0]);
}

// Add product to array
function addProduct(productName){
products.push(productName);
}

//update product name
function updateProductName(name, newName){
products[`${name}`] = `${newName}`;
}

// Remove last item in array
function removeLastProduct(){
products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
