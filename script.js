function shoppingList() {
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
    
    var total = 0;
    
    for ( i = 0; i < items.length; i++) {
        console.log ( items[i] + ": $" + prices[i] );
        total += prices[i];
    }
    
    console.log ( "Total: $" + total )
}

shoppingList();