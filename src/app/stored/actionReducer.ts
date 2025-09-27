import { createReducer, on, State } from "@ngrx/store";
import { Department } from "./actionInterface";
import { loadDepartment, loadDepartmentSucces } from "./action";

export interface DepartmentState{
    departments:Department[];
    loading:boolean;
}

export const initialState:DepartmentState={
    departments:[],
    loading:false
};

export const departmentReducer = createReducer(
    initialState, 
    on(loadDepartment,state => ({
        ...state,
        loading:true
    })),
    // on(loadDepartmentSucces, (state,{departments}) =>({
    //     ...state,
    //     departments,
    //     loading:false
    // }))
    on(loadDepartmentSucces, (state, { departments }) => {
  console.log('Reducer received:', departments);
  return {
    ...state,
    departments,
    loading: false
  };
})
)