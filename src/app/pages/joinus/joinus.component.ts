import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { map } from 'rxjs';
import {JoinUsService} from '../../services/contact.service'

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
  focus: any;
  focus1: any;
  joinUsFormGroup: FormGroup;
  fullName = new FormControl('');
  constructor(private service: JoinUsService) { }

  ngOnInit(): void {
    this.joinUsFormGroup = new FormGroup({
      "fullName": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "email": new FormControl(null, [Validators.required, Validators.email]),

      "phoneNum": new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')])
    })
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log(data);
    });
  }

  submit(){
    // let userData = {
    //   "fullName": this.joinUsFormGroup.get("fullName").value,
    //   "email": this.joinUsFormGroup.get("email").value,
    //   "phoneNumber": this.joinUsFormGroup.get("phoneNum").value
    // }
    // console.log(this.joinUsFormGroup.value)
    let userInfo = this.joinUsFormGroup.value;
    this.service.create(userInfo)
  }
  
  }


