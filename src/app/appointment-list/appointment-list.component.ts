import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {

  appointment : string = 'Take a dog for a walk' //it can be defined through the constructor

}
