process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");
process.stdin.on("data", (key) => {
  if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === "b") {
    process.stdout.write("\x07");
  } else if (!isNaN(key)) {
    console.log(`setting timer for ${key} seconds`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
});
