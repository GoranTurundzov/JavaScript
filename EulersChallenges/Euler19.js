let Euler19 = (from , to) => {
    let final = 0;

    for(let i = new Date(1901 , 01 , 01) ; i < new Date(2000 , 12 , 31) ; i.setMonth(i.getMonth() +1)){
        if(i.getDay() === 0){
           final++
        }
    }

    console.log(final)
}

Euler19(new Date(1901 , 01 , 01) , new Date(2000 , 12 , 31))