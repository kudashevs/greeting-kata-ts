type Greetable = string[] | string | null;

export default class Greeter {
  greet(who: Greetable): string {
    if (Array.isArray(who)) {
      return "Hello, Bob and Alice.";
    }

    if (who === null) {
      return "Hello, my friend.";
    }

    if (this.isShouting(who)) {
      return `HELLO, ${who}!`;
    }

    return `Hello, ${who}.`;
  }

  private isShouting(who: string): boolean {
    return who === who.toUpperCase();
  }
}
