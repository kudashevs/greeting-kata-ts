import {match} from 'ts-pattern';
import TypeIdentifier from './TypeIdentifier/TypeIdentifier';
import {Greetable, InputType} from './Types/Types.d.ts';
import Handler from './Handlers/Handler';
import ArrayHandler from './Handlers/ArrayHandler';
import StringHandler from './Handlers/StringHandler';
import NullHandler from './Handlers/NullHandler';

export default class Greeter {

  private identifier: TypeIdentifier = new TypeIdentifier();


  greet(input: Greetable): string {
    return this.resolve(input)
      .handle(input);
  }

  private resolve(input: Greetable): Handler {
    return match(this.identifier.identify(input))
      .with(InputType.Array, () => new ArrayHandler())
      .with(InputType.String, () => new StringHandler())
      .with(InputType.Null, () => new NullHandler())
      .exhaustive();
  }
}
