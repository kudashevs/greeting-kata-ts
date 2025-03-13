type Greetable = string[] | string | null;

export default class Greeter {
  greet(who: Greetable): string {
    if (Array.isArray(who)) {
      return this.normalGreeting(this.concatenate(who));
    }

    if (who === null) {
      return this.normalGreeting('my friend');
    }

    if (this.isShouting(who)) {
      return this.shoutGreeting(who);
    }

    return `Hello, ${who}.`;
  }

  private isShouting(who: string): boolean {
    return who === who.toUpperCase();
  }

  private normalGreeting(who: string): string {
    return `Hello, ${who}.`;
  }

  private shoutGreeting(who: string): string {
    return this.normalGreeting(who)
      .replace(/\.$/, '!')
      .toUpperCase();
  }

  private concatenate(who: string[]): string {
    return who.length === 2
      ? who.join(' and ')
      : who.slice(0, -1).join(', ') + ', and ' + who.slice(-1);
  }
}
