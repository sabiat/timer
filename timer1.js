//variable to hold all the times when timer should beep in array
const times = process.argv.slice(2);

for (const time of times) {
  if (time > 0 && isNaN(time) === false) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * 1000);
  }
}
