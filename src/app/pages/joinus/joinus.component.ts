import { Component, OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { map } from 'rxjs';
import { DatePipe } from '@angular/common';
import {JoinUsService} from '../../services/contact.service'

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css'],
  providers: [DatePipe]
})

export class JoinusComponent implements OnInit {
  focus: any;
  focus1: any;
  joinUsFormGroup: FormGroup;
  currDate: DatePipe;

  constructor(private service: JoinUsService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.joinUsFormGroup = new FormGroup({
      "fullName": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "phoneNum": new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      "address" : new FormControl(null, [Validators.required]),
      "city" : new FormControl(null, [Validators.required]),
      "zipcode" : new FormControl(null, [Validators.required]),
      "state" : new FormControl(null, [Validators.required]),
      "hometown" : new FormControl(null, [Validators.required])
    })

    // this.service.getAll().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
    //     )
    //   )
    // ).subscribe(data => {
    //   console.log(data);
    // });
  }
  

  submit(){
    // let userData = {
    //   "fullName": this.joinUsFormGroup.get("fullName").value,
    //   "email": this.joinUsFormGroup.get("email").value,
    //   "phoneNumber": this.joinUsFormGroup.get("phoneNum").value
    // }
    // console.log(this.joinUsFormGroup.value)
    if (this.joinUsFormGroup.valid) {
      let currDate = this.datePipe.transform( (new Date()), 'MM-dd-yyyy');
      let userInfo = {"userInfo" : this.joinUsFormGroup.value, "Date Created" : currDate};
      // console.log(userInfo);
      this.service.create(userInfo)
      alert("The form has been submitted!")
      this.joinUsFormGroup.reset();
    } else {
      alert("Form is not complete.")
    }
    

  }
  
  }


