import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    LoginComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeAddComponent,
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
