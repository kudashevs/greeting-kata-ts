import {describe, expect, it} from 'vitest';
import Greeter from '../src/greeter.ts';

describe('greeter test suite', () => {
  const greeter = new Greeter();

  it("interpolates name", () => {
    expect(greeter.greet('Alice')).to.equal('Hello, Alice.');
  });

  it("handle null", () => {
    expect(greeter.greet(null)).to.equal('Hello, my friend.');
  });

  it("handle shouting", () => {
    expect(greeter.greet('ALICE')).to.equal('HELLO, ALICE!');
  });

  it("handle two names", () => {
    expect(greeter.greet(['Bob', 'Alice'])).to.equal('Hello, Bob and Alice.');
  });

  it("handle three names", () => {
    expect(greeter.greet(['Amy', 'Brian', 'Charlotte'])).to.equal('Hello, Amy, Brian, and Charlotte.');
  });

  it("handle different names", () => {
    expect(greeter.greet(['Amy', 'BRIAN', 'Charlotte'])).to.equal('Hello, Amy and Charlotte. AND HELLO BRIAN!');
  });

  it("handle names and sequences", () => {
    expect(greeter.greet(['Bob', 'Charlie, Dianne'])).to.equal('Hello, Bob, Charlie, and Dianne.');
  });

  it("handle intentional commas", () => {
    expect(greeter.greet(['Bob', '"Charlie, Dianne"'])).to.equal('Hello, Bob and Charlie, Dianne.');
  });
});
