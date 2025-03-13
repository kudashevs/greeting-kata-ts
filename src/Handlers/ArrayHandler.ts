import Handler from './Handler';

export default class ArrayHandler extends Handler {
  handle(text: string[]): string {
    const names: string[] = text.reduce((acc, sequense) => {
      return [...acc, ...this.parseSequence(sequense)];
    }, []);

    const normalNames = names.filter((name) => !this.isShouting(name));
    const shoutNames = names.filter((name) => this.isShouting(name));

    return (shoutNames.length > 0)
      ? this.normalGreeting(this.concatenateNormal(normalNames)) + this.shoutGreeting(this.concatenateShout(shoutNames))
      : this.normalGreeting(this.concatenateNormal(normalNames));
  }

  private parseSequence(sequense: string): string[] {
    return sequense.includes(',') ? sequense.split(', ') : [sequense];
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
