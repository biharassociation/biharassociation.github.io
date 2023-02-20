import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class JoinUsService {

  private dbPath = '/JoinUsForm';
  tutorialsRef: AngularFirestoreCollection<JoinUsForm>;
  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<JoinUsForm> {
    return this.tutorialsRef;
  }
  create(tutorial: any): any {
    return this.tutorialsRef.add({ ...tutorial});
  }
  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}


export default class JoinUsForm {
  fullName?: string;
  email?: string;
  phoneNum?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: number;
  hometown?: string;
}