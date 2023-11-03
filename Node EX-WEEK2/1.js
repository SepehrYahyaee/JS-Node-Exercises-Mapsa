// تابعی بنویسید که رشته ای را به عنوان آرگومان دریافت کند و اولین عدد صحیح رشته از چپ را برگرداند

function firstIntegerFinder(str){
    const arr = [...str];
    // const filtered = arr.filter(val => val * 1 ? val : null);
    // console.log(filtered[0]);
    let find = arr.find(val => isNaN(Number(val)) ? null : val);
    console.log(find);
};

firstIntegerFinder("TrAdE2W1n95!");
firstIntegerFinder("V3r1ta$");
firstIntegerFinder("DertHe1nflu3nC3");
firstIntegerFinder("De0rtHe1nflu3nC3");

// مطمعن نیستم برای کاراکترای در رشته بیشتر از 16 بیت هم عمل کنه ولی برای مثالای ملموس اوکیه
// فیلتر هم به همون جواب میرسه ولی خب فایند راحت تره چون به اولین جوابی که میرسه دیگه جلوتر نمیره