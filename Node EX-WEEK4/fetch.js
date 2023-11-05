const fs = require('fs');

fs.readFile("./input.txt", "utf-8", (err, data) => {
    if (err) throw new Error("an Error has occured during reading the input file!");
    url = data.split("\n");
    url.forEach((address, index) => {
       fetch(address)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            fs.writeFile(`data${index + 1}.json`, JSON.stringify(data, null, 2), (err) => {
                if (err){
                    throw new Error("an Error has occured while writing the file!")
                }
        })
        })
        .catch((err) => {
            console.log(err);
            })
    })
})