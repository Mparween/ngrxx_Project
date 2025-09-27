import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app/stored/store';
import { CommonModule } from '@angular/common';
import { selectDepartments } from '../../app/stored/selector';
import { BehavirialSubService } from '../../app/service/behavirial-sub.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  count:Observable<number>

  constructor(private store:Store<AppState>){
    this.count=this.store.pipe(select('count'))
  }

  private storee=inject(Store);

department$=this.storee.select(selectDepartments)

// behaviaial sub
private deptStore = inject(BehavirialSubService);
ngOnInit(): void {
  this.deptStore.loadDepartments();
}

  departmentsB$ = this.deptStore.departments$;
  loadingB$ = this.deptStore.loading$;
}
