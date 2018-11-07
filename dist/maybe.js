"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maybe = /** @class */ (function () {
    function Maybe() {
        var _this = this;
        // @ts-ignore: Allow null initialization
        this.value = null;
        this.get = function () { return _this.value; };
        this.isPresent = function () { return _this.value !== null; };
        this.isAbsent = function () { return _this.value === null; };
        this.map = function (func) {
            return _this.isPresent() ? Maybe.just(func(_this.value)) : Maybe.nothing();
        };
        this.flatMap = function (func) {
            return _this.isPresent() ? func(_this.value) : Maybe.nothing();
        };
        this.filter = function (pred) {
            return _this.isAbsent() || pred(_this.value) ? _this : Maybe.nothing();
        };
        this.ifPresent = function (proc) {
            if (_this.isPresent()) {
                proc(_this.value);
            }
        };
        this.equals = function (other) { return Maybe.equals(_this, other); };
        this.orElse = function (other) { return (_this.isPresent() ? _this.value : other); };
        this.orElseGet = function (supp) { return (_this.isPresent ? _this.value : supp()); };
    }
    Maybe.prototype.setValue = function (value) {
        this.value = value;
    };
    Maybe.EMPTY = new Maybe();
    Maybe.nothing = function () { return Maybe.EMPTY; };
    Maybe.just = function (value) {
        var maybe = new Maybe();
        maybe.setValue(value);
        return maybe;
    };
    Maybe.equals = function (a, b) {
        return (a.isAbsent() && b.isAbsent()) || a.value === b.value;
    };
    return Maybe;
}());
exports.Maybe = Maybe;
exports.default = Maybe;
//# sourceMappingURL=maybe.js.map