export type Map<T, U> = (a: T) => U;
export type Predicate<T> = (a: T) => boolean;
export type Consumer<T> = (a: T) => void;
export type Supplier<T> = () => T;

export class Maybe<T> {
  private static EMPTY: Maybe<any> = new Maybe();
  // @ts-ignore: Allow null initialization
  private value = null as T;

  static nothing = <U>() => Maybe.EMPTY as Maybe<U>;

  static just = <U>(value: U) => {
    const maybe = new Maybe<U>();
    maybe.setValue(value);

    return maybe;
  };

  static equals = <U>(a: Maybe<U>, b: Maybe<U>) =>
    (a.isAbsent() && b.isAbsent()) || a.value === b.value;

  get = () => this.value;

  isPresent = () => this.value !== null;
  isAbsent = () => this.value === null;

  map = <U>(func: Map<T, U>) =>
    this.isPresent() ? Maybe.just(func(this.value)) : Maybe.nothing<U>();

  flatMap = <U>(func: Map<T, Maybe<U>>) =>
    this.isPresent() ? func(this.value) : Maybe.nothing<U>();

  filter = (pred: Predicate<T>): Maybe<T> =>
    this.isAbsent() || pred(this.value) ? this : Maybe.nothing();

  ifPresent = (proc: Consumer<T>) => {
    if (this.isPresent()) {
      proc(this.value);
    }
  };

  equals = (other: Maybe<T>) => Maybe.equals<T>(this, other);

  orElse = (other: T) => (this.isPresent() ? this.value : other);
  orElseGet = (supp: Supplier<T>) => (this.isPresent ? this.value : supp());

  private constructor() {}

  private setValue(value: T) {
    this.value = value;
  }
}

export default Maybe;
