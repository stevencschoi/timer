const timer = process.argv.slice(2).map(char => char * 1000);
const sortTimer = timer.sort((x, y) => {
  return x - y;
});

sortTimer.forEach(time => {
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time);
  }
});