/**
 * A program that uses process.stdin to read user input.
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
