"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager = /** @class */ (function () {
    function Manager(fn, ln) {
        this.salary = 100000;
        this.firstName = fn;
        this.lastName = ln;
        this.age = 30;
    }
    Manager.prototype.getSalary = function () {
        return this.salary;
    };
    Manager.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Manager;
}());
exports.Manager = Manager;
