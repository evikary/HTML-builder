const path = require('path');
const fs = require('fs');
const process = require('node:process');

const output = fs.createWriteStream(path.join(__dirname, 'text.txt'));
const { stdin, stdout } = process;

stdout.write('Приветик!\n');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    handleExit();
  }
  output.write(data);
});

process.on('SIGINT', () => {
  handleExit();
});

function handleExit() {
  stdout.write('До встречи!\n');
  process.exit();
}
