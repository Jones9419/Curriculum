var shoppingList = ['apples', 'biscuits', 'cabbage'];

function addItem(item) {
    setTimeout(() => {
        shoppingList.push(item);
        console.log("Item added to shopping list");
    },200);
}

function getAllItems () {
    setTimeout(() => {
        console.log('Shopping List Items:');
        console.log(shoppinglist);
    }, 100);
}

addItem('dip', getAllItems);
