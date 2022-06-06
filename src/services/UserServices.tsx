import { IUserSOld } from "../models/IUserSOld";

export class UserServices {
    private static users: IUserSOld[] = [
        {
            sno: 'AAA101',
            name: 'abo',
            age: 25,
            designation: 'brat',
            company: 'ynker'
        },
        {
            sno: 'AAA102',
            name: 'Gugo',
            age: 27,
            designation: 'mec brat',
            company: 'canot'
        },
        {
            sno: 'AAA103',
            name: 'Tiko',
            age: 28,
            designation: 'senior brat',
            company: 'ynker'
        }
    ];

    public static getAllUsers() {
        return this.users
    }
}