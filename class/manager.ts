import {Person} from '../interface/person'
export class Manager implements Person{
    firstName: string;  
    lastName: string;
    private salary:number = 100000;
    readonly age:number;
    constructor(fn:string,ln:string){
        this.firstName = fn;
        this.lastName = ln;
        this.age =30;
    }
    getSalary():number{
        return this.salary;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    
}