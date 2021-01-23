const chalk = require('chalk');
const readLineSync= require('readline-sync');

function hexToRgb(hex)
{
  const hexValue=hex.match(/.{1,2}/g);
  const red=parseInt(hexValue[0],16);
  const green=parseInt(hexValue[1],16);
  const blue=parseInt(hexValue[2],16);
  return [red,green,blue];
}

function rgbToHex(red,green,blue)
{
  const hex1 = Number(red).toString(16);
  const hex2 = Number(green).toString(16);
  const hex3 = Number(blue).toString(16);
  return hex1+hex2+hex3;
}

function rgbHexConverter()
{
  console.log(chalk.yellowBright.bold("------RGB-HEX CONVERTER UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] HEX TO RGB \n\n[2] RGB TO HEX\n\n\[3] Exit\n\n\n"));
  
  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));

  while(option!==3)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----HEX TO RGB CONVERTER----\n\n"));
        const hex = readLineSync.question(chalk.yellowBright.bold("Enter the hex value :#"));
        const rgb = hexToRgb(hex);
        console.log(chalk.red("The rgb value is: ",rgb +'\n\n'));
        break;
      case 2:
        console.log(chalk.redBright("\n----RGB TO HEX CONVERTER----\n\n"));
        const red = parseInt(readLineSync.question(chalk.yellowBright.bold("Enter red value(0-255): \n")));
        const green = parseInt(readLineSync.question(chalk.yellowBright.bold("Enter green value(0-255): \n")));
        const blue = parseInt(readLineSync.question(chalk.yellowBright.bold("Enter blue value(0-255): \n")));
        const hexVal = rgbToHex(red,green,blue);
        console.log(chalk.red("The hex value is: #"+hexVal+'\n\n'));
        break;
      case 3:
        option = 3;
        break;
      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }
    
    if(option!=3)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3)\n")));
      }
      else if(choice===2)
      {
        option = 3;
      }
    }
  }
}

rgbHexConverter();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));