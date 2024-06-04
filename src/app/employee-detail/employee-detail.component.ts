import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { Employees } from '../../employee';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css'
})

export class EmployeeDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  employee = Employees.find((i) => i.id === this.id);
}
