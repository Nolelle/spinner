let timeDelay = 100;
let arr = [
  "\r|     ",
  "\r/     ",
  "\r-     ",
  "\r\\    ",
  "\r-     ",
  "\r|     ",
  "\n",
];
for (let i = 0; i < 7; i++) {
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, timeDelay);
  timeDelay += 200;
  // console.log(timeDelay);
}
