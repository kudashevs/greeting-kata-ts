type Greetable = string[] | string | null;

export function greet(who: Greetable): string {
  if (who === null) {
    return processNone();
  }

  if (Array.isArray(who)) {
    return processNames(who);
  }

  return processName(who);
}

function isShouting(who: string): boolean {
  return who === who.toUpperCase();
}

function processNames(who: string[]): string {
  return `Hello, ${concatenateNames(who)}.`;
}

function processName(who: string): string {
  return isShouting(who)
    ? `HELLO, ${who}!`
    : `Hello, ${who}.`;
}

function processNone(): string {
  return "Hello, my friend.";
}

function concatenateNames(names: string[]): string {
  if (names.length === 2) {
    return names.join(' and ');
  }

  const last = names.pop();

  return names.join(', ') + ', and ' + last;
}
