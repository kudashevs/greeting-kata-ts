import {expect, it} from 'vitest';
import {greet} from '../src/greet.ts';

it("interpolates name", () => {
  expect(greet('Alice')).to.equal('Hello, Alice.');
});

it("handle null", () => {
  expect(greet(null)).to.equal('Hello, my friend.');
});

it("handle shouting", () => {
  expect(greet('ALICE')).to.equal('HELLO, ALICE!');
});

it("handle two names", () => {
  expect(greet(['Bob', 'Alice'])).to.equal('Hello, Bob and Alice.');
});

it("handle three names", () => {
  expect(greet(['Amy', 'Brian', 'Charlotte'])).to.equal('Hello, Amy, Brian, and Charlotte.');
});

it("handle different names", () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).to.equal('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});

it("handle names and sequences", () => {
  expect(greet(['Bob', 'Charlie, Dianne'])).to.equal('Hello, Bob, Charlie, and Dianne.');
});

