import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
// import { MatDialogModule } from '@angular/material/dialog';
import { UserAddressComponent } from '../user-address/user-address.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  users;
  data;
  // id: number;
  lastIndex: number;

  constructor(private userservice: UserService) {}
  ngOnInit() {
    this.lastIndex = 0;
    this.users = this.userservice.getUsers();
    console.info(this.users);
    this.users.subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(this.data);
    });
  }

  model = new User(0, '', '', '', '', '', '', '');
  submitted = false;
  newRow = [];
  fullRow = [];
  userId: string;
  dataSize: number;

  onSubmit() {
    this.submitted = true;
    this.dataSize = this.data.length;
    console.log(typeof this.model);
    this.lastIndex = this.dataSize + 1;

    this.userId = 'id: ' + this.lastIndex;
    console.log(this.userId);

    console.log(this.lastIndex);
    this.data[this.lastIndex - 1] = this.model; //adds the new user

    console.log(this.data[this.dataSize].id);

    this.data[this.dataSize].id = this.lastIndex; // replace id 0 with last index
    console.log(this.data);
    console.log(typeof this.data);
    console.log(this.users);
    console.log(typeof this.users);
  }

  newUser() {
    this.model = new User(this.lastIndex, '', '', '', '', '', '', '');
  }

  /* save() {
    //const tourPackageData = this.packageForm.getRawValue();
    const dialogRef = this.dialog.open(UserAddressComponent, {
      height: '70%',
      width: '30%',
    });
    //dialogRef.afterClosed().subscribe((result) => {
    //if (result) {
    //  this.tourPackageController.save(tourPackageData).subscribe((savedData: any) => {
    //   this.packageForm.get('id').setValue(savedData.id);

    // };
    //  });
  }*/
}
