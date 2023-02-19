import { zip } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import * as firebase from 'firebase/app';

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