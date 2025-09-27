import { createAction, createFeatureSelector, createSelector } from "@ngrx/store";
import { DepartmentState } from "./actionReducer";


export const selectDepartmentState = createFeatureSelector<DepartmentState>('departments')

export const selectDepartments=createSelector(
    selectDepartmentState,
    state=>state.departments
);

export const selectLoading=createSelector(
    selectDepartmentState,
    state=>state.loading
);