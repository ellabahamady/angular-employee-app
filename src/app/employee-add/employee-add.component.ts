import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

import { HeaderComponent } from '../header/header.component';
import { Groups } from '../../group';
import { Employees } from '../../employee';

interface Status {
  id: number;
  name: string;
}

@Component({
  selector: 'app-employee-add',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    HeaderComponent
  ],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})

export class EmployeeAddComponent {
  router = inject(Router);

  alertMessage = '';
  isAlertMessage = false;

  maxDate = new Date();

  groups = Groups;
  statusList: Status[] = [
    {id: 1, name: 'Active'},
    {id: 0, name: 'Non Active'},
  ];

  addForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', Validators.required),
    basicSalary: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  submit(){
    let username = this.addForm.value.username ?? '';
    let firstName = this.addForm.value.firstName ?? '';
    let lastName = this.addForm.value.lastName ?? '';
    let email = this.addForm.value.email ?? '';
    let birthDate = this.addForm.value.birthDate ?? '';
    let basicSalary = this.addForm.value.basicSalary ?? '';
    let group = this.addForm.value.group ?? '';
    let status = this.addForm.value.status ?? '';
    let description = this.addForm.value.description ?? '';

    if(this.addForm.valid){
      // Username & email must be unique
      const isExist = Employees.some(employee => employee.username === username || employee.email === email);

      if(isExist){
        this.isAlertMessage = true;
        this.alertMessage = 'Username or Email already exists!';
      } else {
        let ids = Employees.map((a) => a.id);
        let maxId = 0;
        if (ids.length > 0) {
          maxId = Math.max(...ids);
        }

        let newEmployee = {
          id: maxId + 1,
          username: username,
          firstName: firstName,
          lastName: lastName,
          email: email,
          birthDate: new Date(birthDate),
          basicSalary: Number(basicSalary),
          status: status,
          group: group,
          description: new Date(description)
        }

        Employees.unshift(newEmployee);
        this.addForm.reset();

        this.router.navigateByUrl('/list');
      }
    }
  }
}
