process.stdout.write('hello from spinner1.js... \rheyyy\n');

const char = ["|", "/", "-", '\\', "|", "/", "-", '\\'];

let i = 0;
function spinner() {
  setTimeout(() => {
    if (i === char.length - 1) {
      process.stdout.write(char[i] + '\n');
      return;
    }
    if (i > char.length - 1) {
      return;
    }
    process.stdout.write(`\r${char[i]}`);
    i++;
    spinner();
  }, 200);
}

spinner(char);