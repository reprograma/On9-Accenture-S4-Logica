let adição = [23, 14, 56, 77];

function soma(adição){
    
    let total = 0;

    for(let index = 0; index < adição.length; index++){
   
    total = total + adição[index];
    }
    return total;
}

    console.log(soma(adição))


