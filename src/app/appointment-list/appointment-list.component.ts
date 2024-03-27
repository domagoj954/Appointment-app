import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
//it can be defined through the constructor
  appointment : Appointment = {
    id:  1,
    title: 'Take a dog for a walk',
    date: new Date ('2024-03-27')
  }  
}
