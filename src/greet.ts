type Greetable = string[] | string | null;

/*
 * Before refactoring:
 * LOC: 74
 * ABC: 25
 * A (Assignments) = 10
 * B (Branches) = 7
 * C (Conditions) = 8
 */
export function greet(who: Greetable): string {
  if (who === null) {
    return processNone();
  }

  if (Array.isArray(who)) {
    return processNames(who);
  }

  return processName(who);
}

function processNone(): string {
  return 'Hello, my friend.';
}

/*
 * Before refactoring:
 * LOC: 24
 * ABC: 8
 * A (Assignments) = 4
 * B (Branches) = 2
 * C (Conditions) = 2
 */
function processNames(who: string[]): string {
  const names = who.reduce((acc, sequense) => {
    acc.push(...parseSequence(sequense));

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

function parseSequence(sequense) {
  if (sequense.includes('"')) {
    return [sequense.replace(/^"/, '').replace(/"$/, '')];
  }

  return sequense.includes(',') ? sequense.split(', ') : [sequense];
}

function processName(who: string): string {
  return isShouting(who)
    ? `HELLO, ${who}!`
    : `Hello, ${who}.`;
}

function isShouting(who: string): boolean {
  return who === who.toUpperCase();
}
