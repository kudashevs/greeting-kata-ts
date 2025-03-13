import {Greetable} from '../Types/Types';

export default abstract class Handler {
  abstract handle(text: Greetable): string;

  protected isShouting(who: string): boolean {
    return who === who.toUpperCase();
  }

  protected normalGreeting(who: string): string {
    return `Hello, ${who}.`;
  }
};
