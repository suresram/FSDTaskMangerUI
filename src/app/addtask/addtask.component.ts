import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup,FormsModule,FormBuilder,  Validators,ReactiveFormsModule } from '@angular/forms';
import {TaskService} from '../services/task.service';
import { Task } from './task';
import { Router } from '@angular/router';
 


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  task: Task = new Task();
   
  constructor(private router: Router,private taskervice: TaskService) {
     
   }
   error:any={isError:false,errorMessage:''};
   
   compareTwoDates(){
     this.error={isError:false,errorMessage:''};
      if(new Date(this.task.endDate)<new Date(this.task.startDate)){
         this.error={isError:true,errorMessage:'End Date can not before start date'};
      }
   }

   addTask(): void {

    console.log(this.task.task);
    this.task.status="active";
    console.log(this.task.status);
    if(this.task.task !== '' && this.task.parentTask!== undefined){

   /* this.taskervice.addTask(this.task)
        .subscribe( data => {
        });*/
      }else{
        alert("please fill required values")
      }


  };

  /*addTask(task, parentTask,startDate, endDate) {
    this.taskervice.addTask(task,parentTask,startDate,endDate);
  }*/
  ngOnInit() {
    this.task.task='';
    this.task.parentTask='';
    this.task.priority=10;
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
