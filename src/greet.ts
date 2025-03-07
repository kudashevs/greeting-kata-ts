type Greetable = string[] | string | null;

export function greet(who: Greetable): string {
  if (Array.isArray(who)) {
    return `Hello, ${concatenateNames(who)}.`;
  }

  if (who === null) {
    return "Hello, my friend.";
  }

  if (isShouting(who)) {
    return `HELLO, ${who}!`;
  }

  return `Hello, ${who}.`;
}

function isShouting(who: string): boolean {
  return who === who.toUpperCase();
}

function concatenateNames(names: string[]): string {
  if (names.length === 2) {
    return names.join(' and ');
  }

  const last = names.pop();

  return names.join(', ') + ', and ' + last;
}
