type Greetable = string[] | string | null;

export default class Greeter {
  greet(who: Greetable): string {
    if (Array.isArray(who)) {
      return `Hello, ${this.concatenate(who)}.`;
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

  private concatenate(who: string[]) : string{
    return who.length === 2
      ? who.join(' and ')
      : who.slice(0, -1).join(', ') + ', and ' + who.slice(-1);
  }
}
