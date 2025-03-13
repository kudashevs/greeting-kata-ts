import {Greetable, InputType} from '../Types/Types.d.ts';

export default class TypeIdentifier {
  identify(input: Greetable): InputType {
    switch (true) {
      case Array.isArray(input):
        return InputType.Array;

      case input === null:
        return InputType.Null;

      default:
        return InputType.String;
    }
  }
};
