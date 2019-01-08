import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Task } from '../addtask/task';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {
  //private userUrl = 'http://localhost:8080/user-portal/user';
  private userUrl = 'http://localhost:7070';
  constructor(private http: HttpClient) { }

  public addTask(task) {
    return this.http.post<Task>(this.userUrl+'/tasks', task);
  }

  public viewTask() {
    return this.http.get<Task[]>(this.userUrl+'/tasks');
  }
  public updateTask(task,taskId){
console.log(taskId+ task);
return this.http.put<string>(this.userUrl+'/tasks/'+taskId,task);
  }

  public endTask(taskId){
    console.log(taskId);
    return this.http.delete<Task[]>(this.userUrl+'/tasks/'+taskId);
      }
  /* addTask(task, parentTask,startDate,endDate) {
    const uri = 'http://localhost:4000/task/add';
    const obj = {
      task: name,
      parentTask: parentTask,
      startDate:startDate,
      endDate:endDate

    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  } */
}