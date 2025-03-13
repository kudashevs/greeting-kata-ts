import Handler from './Handler';

export default class ArrayHandler extends Handler {
  handle(text: string[]): string {
    return this.normalGreeting(this.concatenate(text));
  }

  private concatenate(who: string[]): string {
    return who.length === 2
      ? who.join(' and ')
      : who.slice(0, -1).join(', ') + ', and ' + who.slice(-1);
  }
};
