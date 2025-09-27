import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../stored/actionInterface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  constructor(private http:HttpClient) { }

  getDept(){
    return this.http.get('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments')
  }
}
