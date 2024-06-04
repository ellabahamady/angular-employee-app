import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './app/employee-detail/employee-detail.component';
import { EmployeeAddComponent } from './app/employee-add/employee-add.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'add', component: EmployeeAddComponent },
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync()]
});
