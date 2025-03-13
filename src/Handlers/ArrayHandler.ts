import Handler from './Handler';

export default class ArrayHandler extends Handler {
  handle(text: string[]): string {
    const normalNames = text.filter((name) => !this.isShouting(name));
    const shoutNames = text.filter((name) => this.isShouting(name));

    return (shoutNames.length > 0)
      ? this.normalGreeting(this.concatenateNormal(normalNames)) + this.shoutGreeting(this.concatenateShout(shoutNames))
      : this.normalGreeting(this.concatenateNormal(normalNames));
  }

  private concatenateNormal(names: string[]): string {
    return names.length === 2
      ? names.join(' and ')
      : names.slice(0, -1).join(', ') + ', and ' + names.slice(-1);
  }

  private shoutGreeting(who: string): string {
    return ` AND HELLO ${who}!`;
  }

  private concatenateShout(names: string[]): string {
    return names.join(', ');
  }
};
