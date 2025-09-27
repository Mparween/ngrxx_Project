import { inject, Inject, Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';

import { catchError, map, mergeMap,of } from "rxjs";
import { DepartmentserviceService } from "../service/departmentservice.service";
import { loadDepartment, loadDepartmentSucces } from "./action";

@Injectable()
export class DepartmentEffects{
    action$ = inject(Actions);
    constructor(private departmentService:DepartmentserviceService){}

    loadDepartment$ = createEffect(() => this.action$.pipe(
        ofType(loadDepartment),
        mergeMap(() => this.departmentService.getDept().pipe(
            map((departments:any) => {
           return loadDepartmentSucces({departments});
})
)
        ))
    );
    
}