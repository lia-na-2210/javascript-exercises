const fibonacci = function(place) {
    const number = parseInt(place);
    if (number < 0) {
        //console.log('oops');
        return 'OOPS';
    } else if (number == 0) {
        //console.log(0);
        return 0;
    }

    let x = 0; 
    let y = 1; 

    for (let i = 1; i < number; i++) {
        const previous = y;
        
        y = x + y; 
        x = previous; 
        
    }

    return y;
    //console.log(y)

};

fibonacci(-25)

// Do not edit below this line
module.exports = fibonacci;
