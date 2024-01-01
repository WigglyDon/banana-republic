const fs = require('fs');

const filePath = './db.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("error", err);
    return;
  }

  const jsonData = JSON.parse(data);

  jsonData.bananas.forEach((item, index) => {
    item.id = index;
  });

  const modifiedJsonData = JSON.stringify(jsonData, null, 4);

  fs.writeFile(filePath, modifiedJsonData, 'utf8', (err) =>{
    if (err) {
      console.error('error', err);
      return;
    }
    console.log("IDs updated successfully to JSON file :)");
  })

})
