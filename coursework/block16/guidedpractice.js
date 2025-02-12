const items = [
    { id: 1, name: 'foo', price: 7},
    { id: 2, name: 'bar', price: 6}
    { id: 3, name: 'bazz', price: 9}
    { id: 4, name: 'quq', price: 13}
];
const name = prompt('enter a namage of an item, we will try and find it', 'foo');
const found = items.find (item => item.name=== name);
const found = items.find(item => item.name === name);
if(found){
    console.log('we found it');
    console.log(found);
}
else {
    console.log('we could not find an item with the name ${name}');
}

const search = prompt('enter a string, we will see the items which have that string in their name', 'ba');
const foundItems = items.filter(item => item.name.index0f(search) !==-1);
console.log(foundItems);
const keyForMapping = promt('choose a key, either id, name, or price so we can use map to display the values for that key', 'price');
const mappedValues = items.map(item => item[keyForMapping]);
console.log("Mapped Values", mappedValues)
const keyForReducing = prompt('choose a key, either id, or price so we can use reduce to sum up the values for that key', 'price');
const reduction = items.reduce((acc, items)=> {
    acc = acc + item[keyForReducing];
    return acc;
}, 0);
console.log(reduction);

