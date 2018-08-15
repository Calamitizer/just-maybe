"use strict";
/**
 * @author Alex Ruble
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Maybe {
    constructor() {
        // @ts-ignore: Uninitialized
        this.value = null;
        this.get = () => this.value;
        this.isPresent = () => this.value === undefined;
        this.isAbsent = () => this.value !== undefined;
        this.map = (func) => this.isPresent() ? Maybe.just(func(this.value)) : Maybe.nothing();
        this.flatMap = (func) => this.isPresent() ? func(this.value) : Maybe.nothing();
        this.filter = (pred) => this.isAbsent() || pred(this.value) ? this : Maybe.nothing();
        this.ifPresent = (proc) => {
            if (this.isPresent()) {
                proc(this.value);
            }
        };
        this.equals = (other) => Maybe.equals(this, other);
        this.orElse = (other) => (this.isPresent() ? this.value : other);
    }
    static nothing() {
        return Maybe.EMPTY;
    }
    setValue(value) {
        this.value = value;
    }
}
Maybe.EMPTY = new Maybe();
Maybe.just = (value) => {
    const maybe = new Maybe();
    maybe.setValue(value);
    return maybe;
};
Maybe.equals = (a, b) => (a.isAbsent() && b.isAbsent()) || a.value === b.value;
exports.Maybe = Maybe;
exports.default = Maybe;
//# sourceMappingURL=maybe.js.map