function tabdilVahed(arr){
    arr.map((val) => {
        if (val.symbol === 'inch'){
            val.value = val.value * 2.54;
            val.symbol = 'cm';
        } else if (val.symbol === 'cm'){
            val.value = val.value / 2.54;
            val.symbol = 'inch';
        }
    })
    return arr;
}

console.log(tabdilVahed([{value: 12, symbol: 'inch'}, {value: 15, symbol: 'cm'}]));

module.exports = {
    tabdilVahed,
}