import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs';
import { JoinUsService } from 'src/app/services/contact.service';
import { SignedUpUser } from 'src/app/model/user';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userdata: SignedUpUser[] = [];
  dataSource: MatTableDataSource<SignedUpUser>;
  selection: SelectionModel<SignedUpUser>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private authService: AuthService, private contactInfo: JoinUsService) { }
  
  displayedColumns = ['select', 'fullName', 'email', 'phoneNum', 'address', 'city', 'state', 'zipcode', 'hometown'];


  ngOnInit(): void {
    
    this.contactInfo.getAll().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            {
              console.log(c);
              return { id: c.payload.doc.id, ...c.payload.doc.data() }
            }
           
          )
        )
      ).subscribe(data => {
        
        
        data.forEach(element => this.userdata.push(new SignedUpUser(element.fullName,element.email,element.phoneNum,element.address,element.city,element.state,element.zipcode,element.hometown)));
        this.dataSource = new MatTableDataSource<SignedUpUser>(this.userdata);
        this.selection = new SelectionModel<SignedUpUser>(true, []);

        this.dataSource.paginator = this.paginator;
        console.log("firebase call");

        console.log(this.userdata);

      });

      
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngAfterViewInit() {
   
  }

  logout(){
    this.authService.SignOut();
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;

}

// const ELEMENT_DATA: Element[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

