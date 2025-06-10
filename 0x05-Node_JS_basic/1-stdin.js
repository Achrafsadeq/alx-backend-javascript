const { stdout, stdin } = process;

stdout.write('Welcome to ALX, what is your name?\n');

stdin.setEncoding('utf-8');

stdin.on('readable', () => {
  const name = stdin.read();
  if (name !== null) {
    stdout.write(`Your name is: ${name}`);
    process.exit();
  }
});

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});
