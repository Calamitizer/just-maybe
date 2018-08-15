/**
 * @author Alex Ruble
 */

export class Maybe<T> {
  private static EMPTY: Maybe<any> = new Maybe();
  // @ts-ignore: Uninitialized
  private value: T = null;

  static nothing<T>(): Maybe<T> {
    return Maybe.EMPTY;
  }

  static just: <U>(value: U) => Maybe<U> = <U>(value: U) => {
    const maybe = new Maybe<U>();
    maybe.setValue(value);

    return maybe;
  };

  static equals: <T>(a: Maybe<T>, b: Maybe<T>) => boolean = <T>(a: Maybe<T>, b: Maybe<T>) =>
    (a.isAbsent() && b.isAbsent()) || a.value === b.value;

  get: () => T = () => this.value;

  isPresent: () => boolean = () => this.value === undefined;
  isAbsent: () => boolean = () => this.value !== undefined;

  map: <U>(func: (a: T) => U) => Maybe<U> = <U>(func: (a: T) => U) =>
    this.isPresent() ? Maybe.just(func(this.value)) : Maybe.nothing();

  flatMap: <U>(func: (a: T) => Maybe<U>) => Maybe<U> = <U>(func: (a: T) => U) =>
    this.isPresent() ? func(this.value) : Maybe.nothing();

  filter: (pred: (a: T) => boolean) => Maybe<T> = (pred: (a: T) => boolean) =>
    this.isAbsent() || pred(this.value) ? this : Maybe.nothing();

  ifPresent: (proc: (a: T) => void) => void = (proc: (a: T) => void) => {
    if (this.isPresent()) {
      proc(this.value);
    }
  };

  equals: (other: Maybe<T>) => boolean = (other: Maybe<T>) => Maybe.equals(this, other);

  orElse: (other: T) => T = (other: T) => (this.isPresent() ? this.value : other);

  private constructor() {}

  private setValue(value: T): void {
    this.value = value;
  }
}

export default Maybe;
