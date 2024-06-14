// console.log('Hello');

// var x = 10;
// var y = 20;
// var z = 30;
// // exports => {}
// exports.x = x; //{myVar : 10}
// module.exports.y = y;
// // module.exports = {z};
// module.exports = {...module.exports,z};


// Array[{},{}]   function AddItem(name , price){}  function sum(Array){}

// let items = [];
// function addItem(name , price){
//     items.push({name , price});
// }
// function getSum(){
//     var sum = 0;
//     for(let i = 0 ; items.length ; i++){
//         sum += items[i].price;
//     }
//     return sum;
// }

// module.exports = {addItem , getSum}

class User{
    Items = [];
    AddItem(name , price){
        this.Items.push({name , price});
    }
    GetSum(){
        var sum = 0;
        for(let i = 0 ; this.Items.length ; i++){
            sum += this.Items[i].price;
        }
        return sum;
    }
}
// module.exports = {OneUser: new User()}
module.exports = {User}