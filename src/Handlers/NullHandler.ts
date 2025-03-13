import Handler from './Handler';

export default class NullHandler extends Handler {
  private readonly DEFAULT_NAME = 'my friend';

  handle(text: null): string {
    return this.normalGreeting(this.DEFAULT_NAME);
  }
};
