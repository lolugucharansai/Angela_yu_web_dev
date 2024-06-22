import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
  .prompt([{
    type: 'input',
    name: 'url',
    message: "Enter the url to convert it into QR code"
  }])
  .then((answers) => {
    const qr_png = qr.image(answers.url);
    qr_png.pipe(fs.createWriteStream('URL.png'));
    console.log('The QR code has been saved as URL.png');
    fs.writeFile("URL.txt",answers.url,function(err){
        if(err)throw err;
        console.log("File has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log(error);
    }
  });

  