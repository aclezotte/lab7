function shoppingList(items, prices) {
    var total = 0;
    
    for ( i = 0; i < items.length; i++) {
        console.log ( items[i] + ": $" + prices[i] );
        total += prices[i];
    }
    
    console.log ( "Total: $" + total );
}

var items = [
    "Milk",
    "Bread",
    "Apples",
    "Spinach"
];

var prices = [
    2.49,
    3.99,
    4.49,
    1.99
];

shoppingList(items, prices);

/*function addToList(form, items, prices) {
    var item = form.itemBox.value;
    var price = form.priceBox.value;
    
    // var items = [];
    // var prices = [];
    
    items.push(item);
    prices.push(price);
    
}*/