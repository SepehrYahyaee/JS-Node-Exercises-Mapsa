function deepEqual(value1, value2) {
    if (typeof value1 === 'boolean' && typeof value2 === 'boolean'){
        if (value1 !== value2) return false;
        return true;
    }
    if ( (typeof value1 === 'number' && typeof value2 === 'object') || (typeof value1 === 'object' && typeof value2 === 'number')){
        return false;
    }
    
	for (let item in value1) {
		if (value1.hasOwnProperty(item) !== value2.hasOwnProperty(item)) return false;

		switch (typeof (value1[item])) {
			case 'object':
				if (!deepEqual(value1[item], value2[item])) return false;
				break;
			default:
				if (value1[item] !== value2[item]) return false;
		}
	}
	return true;
}

// console.log(deepEqual({a: 1, b: 2}, {b:2, a: 1}));
// console.log(deepEqual({a: [1, 2, 3], b: {c: '4'}}, {a: [1, 2, 3], b: {c: '4'}}));
// console.log(deepEqual({a: [1, 2, 3], b: {c: 4}}, {a: [1, 2, 3], b: {c: 5}}));
// console.log(deepEqual(1, [1]));
// console.log(deepEqual([1, [2, 3]], [1, [2, 3]]));
// console.log(deepEqual([1, 2], [2, 1]));
// console.log(deepEqual(true, true));

module.exports = {
    deepEqual,
}