const fs = require('fs');
const readline = require('readline');

let data = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the file name (without extension): ", (fileName) => {
  let filePath = `${__dirname}/data/${fileName}.json`;
  
  fs.readFile(filePath, 'utf8', (err, dataJson) => {
    if (err) throw err;
    
    try {
      const jsonData = JSON.parse(dataJson);
      const totalWords = Object.keys(jsonData).length;

      for (let i = 0; i < totalWords; i++) {
        let word = `${i + 1}. ${jsonData[i].text}`;
        
        data.push(word);
      }
      
      console.log(`Total words in file: ${totalWords}`);
      
      rl.close();
    } catch (e) {
      console.error(e.message);
    }
  });
});
