export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }

 export class SignedUpUser {
    
    id: string;
    email?: string;
    fullName?: string;
    phoneNum?: string;

    constructor(id: string, email: string, fullName: string, phoneNum : string) {
        this.id = id;
        this.email = email;
        this.fullName = fullName;
        this.phoneNum = phoneNum;
      }
 }