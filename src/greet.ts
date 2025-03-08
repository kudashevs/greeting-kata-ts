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
  const names = who.reduce((acc, sequense) => {
    sequense.includes(',') ? acc.push(...sequense.split(', ')) : acc.push(sequense);

    return acc;
  }, []);

  const {
    normal: normalNames,
    shout: shoutNames,
  } = names.reduce((acc, name) => {
    if (isShouting(name)) {
      acc.shout.push(name);
    } else {
      acc.normal.push(name);
    }

    return acc;
  }, {normal: [], shout: []});

  return (shoutNames.length > 0)
    ? `Hello, ${concatenateNames(normalNames)}. AND HELLO ${concatenateShouts(shoutNames)}!`
    : `Hello, ${concatenateNames(normalNames)}.`;
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
