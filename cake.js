// Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.
 
function cakeVarieties () {
    const cakes = ["vanilla", "chocolate", "redVelvet", ];
 
    for (let i = 0; i < cakes.length; i++) {
        console.log(cakes[i]);
    }
};
cakeVarieties();