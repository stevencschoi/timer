// create timer from user input
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

  if (key === 'b') {
  // beep right away
    process.stdout.write('beep');
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('beep');
      process.stdout.write('\x07');
    }, key * 1000);
  }
});