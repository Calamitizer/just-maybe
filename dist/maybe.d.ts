export declare type Mapper<T, U> = (a: T) => U;
export declare type Predicate<T> = (a: T) => boolean;
export declare type Procedure<T> = (a: T) => void;
export declare type Supplier<T> = () => T;
export declare class Maybe<T> {
    private static EMPTY;
    private value;
    static nothing: <U>() => Maybe<U>;
    static just: <U>(value: U) => Maybe<U>;
    static equals: <U>(a: Maybe<U>, b: Maybe<U>) => boolean;
    get: () => T;
    isPresent: () => boolean;
    isAbsent: () => boolean;
    map: <U>(func: Mapper<T, U>) => Maybe<U>;
    flatMap: <U>(func: Mapper<T, Maybe<U>>) => Maybe<U>;
    filter: (pred: Predicate<T>) => Maybe<T>;
    ifPresent: (proc: Procedure<T>) => void;
    equals: (other: Maybe<T>) => boolean;
    orElse: (other: T) => T;
    orElseGet: (supp: Supplier<T>) => T;
    private constructor();
    private setValue;
}
export default Maybe;
