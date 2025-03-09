type Greetable = string[] | string | null;

/*
 * After refactoring:
 * LOC: 54
 * ABC: 22
 * A (Assignments) = 9
 * B (Branches) = 6
 * C (Conditions) = 7
 */
export function greet(who: Greetable): string {
  switch (true) {
    case who === null: return processNone();
    case Array.isArray(who): return processNames(who);
    default: return processName(who);
  }
}

function processNone(): string {
  return 'Hello, my friend.';
}

/*
 * Before refactoring:
 * LOC: 12
 * ABC: 8
 * A (Assignments) = 3
 * B (Branches) = 2
 * C (Conditions) = 3
 */
function processNames(who: string[]): string {
  const names = who.reduce((acc, sequense) => {
    return [...acc, ...parseSequence(sequense)];
  }, []);

  const normalNames = names.filter(name => !isShouting(name));
  const shoutNames = names.filter(name => isShouting(name));

  return (shoutNames.length > 0)
    ? `Hello, ${concatenateNames(normalNames)}. AND HELLO ${concatenateShouts(shoutNames)}!`
    : `Hello, ${concatenateNames(normalNames)}.`;
}

function concatenateNames(names: string[]): string {
  return (names.length <= 2)
    ? names.join(' and ')
    : names.slice(0, -1).join(', ') + ', and ' + names.slice(-1);
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
