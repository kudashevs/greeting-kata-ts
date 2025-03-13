import TypeIdentifier from './TypeIdentifier/TypeIdentifier';
import {Greetable, InputType} from './Types/Types.d.ts';

export default class Greeter {
  private readonly DEFAULT_NAME = 'my friend';

  private identifier: TypeIdentifier = new TypeIdentifier();

  greet(who: Greetable): string {
    if (Array.isArray(who)) {
      return this.normalGreeting(this.concatenate(who));
    }

    if (who === null) {
      return this.normalGreeting(this.DEFAULT_NAME);
    }

    return this.isShouting(who)
      ? this.shoutGreeting(who)
      : this.normalGreeting(who);
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
