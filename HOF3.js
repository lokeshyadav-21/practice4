const items = {
    item_392019302: {
    name: "Washing Machine",
    stock: 3,
    },
    item_392019342: {
    name: "Light Bulb",
    stock: 3,
    },
    item_392019340: {
    name: "Streaming Device",
    stock: 2
    },
    item_392019389: {
    name: "Plug",
    stock: 1
    },
    item_392019311: {
    name: "Trace Araay",
    stock: 1
    }
    }


    // Q1.Form the following solution

    // const result = {
    //     washing_machine: {
    //         item_id: 'item_392019302',
    //         stock: 3
    //     },
    //     light_bulb: {
    //         item_id: 'item_392019342',
    //         stock: 3
    //     },
    //     ...
    // }
    

function getNewObject(items){
    let NewObject = {}
    Object.keys(items).forEach(item => {
        let ItemObject = {}
        ItemObject.item_id = item
        ItemObject.stock = items[item].stock
        NewObject[items[item].name] = ItemObject
    })
    console.log(NewObject);
}

getNewObject(items);


// Q.2 Write a function that takes items object,  propertyName and value as parameters .
// The propertyName is added to each Object.
// Try not to mutate the original object.

// const ab = Object.entries(items)


const newItem = Object.assign(items)

function  addNewProperty(propertyName,Value){

    Object.keys(newItem).map((element)=>{

        return newItem[element][`${propertyName}`]=Value;
    })
}

addNewProperty('model','automobile')

console.log(newItem);


// Q3. Clone items properly 
// using object.assign
// using spread operator.

const NewData1 = Object.assign({},items);
console.log(NewData1);

const NewData2 = {...items};
console.log(NewData2);

