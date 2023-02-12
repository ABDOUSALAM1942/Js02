const myArray = ['50', '60', '70'];

myData = myArray.find(find50);

function find50(item) {
    return item === '50';
}
console.log(myData);


