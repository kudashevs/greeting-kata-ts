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
  const {
    normal: names,
    shout: shouts,
  } = who.reduce((acc, name) => {
    if (isShouting(name)) {
      acc.shout.push(name);
    } else {
      acc.normal.push(name);
    }

    return acc;
  }, {normal: [], shout: []});

  return (shouts.length > 0)
    ? `Hello, ${concatenateNames(names)}. AND HELLO ${concatenateShouts(shouts)}!`
    : `Hello, ${concatenateNames(names)}.`;
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

function concatenateShouts(shouts: string[]): string {
  return shouts.join(', ');
}
