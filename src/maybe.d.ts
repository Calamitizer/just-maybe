export type Map<T, U> = (a: T) => U;
export type Predicate<T> = (a: T) => boolean;
export type Consumer<T> = (a: T) => void;
export type Supplier<T> = () => T;

export class Maybe<T> {
  static nothing: <U>() => Maybe<U>;
  static just: <U>(value: U) => Maybe<U>;
  static equals: <U>(a: Maybe<U>, b: Maybe<U>) => boolean;

  get: () => T;
  isPresent: () => boolean;
  isAbsent: () => boolean;
  map: <U>(func: Map<T, U>) => Maybe<U>;
  flatMap: <U>(func: Map<T, Maybe<U>>) => Maybe<U>;
  filter: (pred: Predicate<T>) => void;
  ifPresent: (cons: Consumer<T>) => void;
  equals: (other: Maybe<T>) => boolean;
  orElse: (other: T) => T;
  orElseGet: (supp: Supplier<T>) => T;
}

export default Maybe;
