import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "../pages/admin/admin.component";
import { UserComponent } from "../pages/user/user.component";
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState } from './stored/store';
import { decrement, increment } from './stored/counter.action';
import { CommonModule } from '@angular/common';
import { loadDepartment } from './stored/action';
import { selectDepartments, selectLoading } from './stored/selector';
import { BehavirialSubService } from './service/behavirial-sub.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ngrxProject';
//   counter:number=0;

//   Increment(){
//     this.counter++
//   }

//   Decrement(){
//     if(this.counter>0){
//     this.counter--;
//   }
// }

counter$:Observable<number>;

constructor(private storee:Store<AppState>){
  this.counter$=this.storee.pipe(select('count'));
}

Decrement(){
  this.storee.dispatch(decrement())
}

Increment(){
  this.storee.dispatch(increment())
}

private store=inject(Store);

department$=this.store.select(selectDepartments)
loading$=this.store.select(selectLoading)

ngOnInit(): void {
  this.store.dispatch(loadDepartment())
  // behaviaial sub
  this.deptStore.loadDepartments();
}

 private deptStore = inject(BehavirialSubService);

  departmentsB$ = this.deptStore.departments$;
  loadingB$ = this.deptStore.loading$;

}
