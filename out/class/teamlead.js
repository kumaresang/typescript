"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TeamLead = /** @class */ (function () {
    function TeamLead(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    TeamLead.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return TeamLead;
}());
exports.TeamLead = TeamLead;
var IPerson = /** @class */ (function () {
    function IPerson() {
    }
    return IPerson;
}());
exports.IPerson = IPerson;
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person2.prototype.getDetails = function () {
        return "";
    };
    return Person2;
}(IPerson));
exports.Person2 = Person2;
