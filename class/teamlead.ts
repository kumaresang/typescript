import {Person} from '../interface/person'
export class TeamLead implements Person{
    firstName: string;   
    lastName: string;
    constructor(fn:string,ln:string){
       this.firstName = fn;
       this.lastName = ln; 
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

export abstract class  IPerson{
    abstract getDetails():void;
}

export class Person2 extends IPerson{
    getDetails(): void {
        return "";
    }
}