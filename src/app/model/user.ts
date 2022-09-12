import { zip } from "rxjs";

export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }

 export class SignedUpUser {

    fullName?: string;
    email?: string;
    phoneNum?: string;
    address?: string;
    city?: string;
    state?: string;
    zipcode?: number;
    hometown?: string;

    constructor(fullName: string, email: string, phoneNum : string,   address: string, city: string, state: string, zipcode: number, hometown: string) {
        this.fullName = fullName;
        this.email = email;
        this.phoneNum = phoneNum;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.hometown = hometown;
      }
 }