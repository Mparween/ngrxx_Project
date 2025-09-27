import { createAction, props } from "@ngrx/store";
import {Department} from "./actionInterface"

export const loadDepartment = createAction('[Department] Load Department');

export const loadDepartmentSucces = createAction(
    '[Department] Load Department Success',
    props<{departments:Department[]}>()
)