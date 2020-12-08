const products = [
  { name: 'Stainless 10"', weight: 1.5, price: 65, size: 10, id: 12 },
  { name: 'Stainless 12"', weight: 1.8, price: 85, size: 12, id: 13 },
  { name: 'Carbon Steel 10"', weight: 1.5, price: 75, size: 10, id: 23 },
  { name: 'Carbon Steel 12"', weight: 1.95, price: 75, size: 12, id: 24 },
  { name: 'Nonstick 10"', weight: 2.0, price: 70, size: 10, id: 3 },
  { name: 'Nonstick 12"', weight: 2.0, price: 70, size: 12, id: 4 },
];

// Return an array of only the products that are priced greater than or equal to 75.
let pricedProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].price >= 75) {
        pricedProducts.push(products[i]);
    }
}
console.log(pricedProducts);

// Return an array of only the products that are heavier than 1.8.
let heavierProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].weight > 1.8) {
        heavierProducts.push(products[i]);
    }
}

console.log(heavierProducts);

// Transform the array into an object, where the keys are IDs and the values are the remaining object properties
let newProducts = {}
for (let i = 0; i < products.length; i++) {
    let id = products[i].id
    newProducts[id] = { 
        name: products[i].name, 
        weight: products[i].weight,
        price: products[i].price,
        size: products[i].size
    }
}
console.log(newProducts)
