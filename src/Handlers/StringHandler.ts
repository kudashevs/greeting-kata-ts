import Handler from './Handler';

export default class StringHandler extends Handler {
  handle(text: string): string {
    return this.isShouting(text) ? this.shoutGreeting(text) : this.normalGreeting(text);
  }

  private shoutGreeting(who: string): string {
    return this.normalGreeting(who)
      .replace(/\.$/, '!')
      .toUpperCase();
  }
};
