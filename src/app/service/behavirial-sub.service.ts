import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Department } from '../stored/actionInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BehavirialSubService {
private departmentsSubject = new BehaviorSubject<Department[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  departments$ = this.departmentsSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadDepartments() {
    this.loadingSubject.next(true);

    this.http.get<Department[]>('https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments')
      .subscribe({
        next: (departments) => {
          this.departmentsSubject.next(departments);
          this.loadingSubject.next(false);
        },
        error: () => {
          this.loadingSubject.next(false);
        }
      });
  }
}
