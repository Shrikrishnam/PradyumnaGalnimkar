import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import {Fitness} from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

 
  constructor(private userService:UserService,private router:Router) { }

  public dataList= [];

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments(){
    return this.userService.getfitnessdata().subscribe(data => this.dataList = data);
  }

  edit(clientId:number){
    this.router.navigate(['place-fitness-trainer-appointment',clientId])  
  } 
  
  deleteAppointment(id:number){
    if(confirm('Are you sure you want to delete the data?')){
    return this.userService.deletefitnessdata(id).subscribe((data:Fitness)=>{
      this.getAppointments();
      console.log(`Appointment with ${id} is deleted `,data.firstname);
    });
  }
  }
}
