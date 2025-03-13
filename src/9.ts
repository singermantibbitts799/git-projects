class Greeter {
  greet(name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const greeter = new Greeter();
greeter.greet("Alice");
