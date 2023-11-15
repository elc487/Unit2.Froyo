// Get Order
const order = prompt ( 'Please enter the froyo flavors separated by comma that you want to purchase',
 'vanilla,coffee,strawberry,vanilla,vanilla,coffee')

// Manipulate order
const ordersplit = order.split(",");


//Function for building order by flavor
function mapOrder(flavors){
    const map = {};
    for (let i = 0; i < flavors.length; i++) {
       if (map[flavors[i]]) {
        map[flavors[i]]++;
       }else {
        map[flavors[i]] = 1;
       }
        
    }
    return map;
}

console.log('your order is as follows : ', mapOrder(ordersplit));