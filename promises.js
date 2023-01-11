

let stocks =  {
    
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};


let is_shop_open = true;

    let order = (time, work) => {
        
        return new Promise((resolve, reject) => {
        
            if(is_shop_open){
                    setTimeout(() => {
                        resolve(work());
                    }, time);
                    
                }
            else{
                reject (console.log("We are Closed Now!"))
            }
        
    });
};
    order(2000,()=>console.log(`${stocks.Fruits[0]} is picked up`))
    .then(( )=> {
        return order(1000,() => {
            console.log("Machine has been started");
        })
    })
    .then(() =>{
        return order(1000,() => {
            console.log(`Adding ${stocks.liquid[0]} And ${stocks.liquid[1]}.`);
        })
    })
    .then(( )=> {
        return order(1000,() => {
            console.log("Machine has been started");
        })
    })
    .then(() => {
        return order(1000,() => {
            console.log(`Icecream is placed on the ${stocks.holder[0]}`);
        })
    })
    .then(() => {
        return order(1000,() =>{
            console.log(`Adding ${stocks.toppings[0]}'s topping`);
        })
    })
    .then(() => {
        return order(2000,() =>{
            console.log(`Your ${stocks.Fruits[0]} Icecream with ${stocks.toppings[0]} topping is Ready. Here you go!`);
        })
    })
    .catch(() => {
        console.log("Customer left");
    })
    .finally(() =>{
        setTimeout(() => {
            console.log("Day ended, shop is closed");
        }, 2000);
        
    });












