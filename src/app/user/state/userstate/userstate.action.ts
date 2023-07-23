import { createAction, props } from "@ngrx/store"
import { Professional } from "../usertypes/usertypes"



export const loadprofessional=createAction("professionalloadhome")
export const loadprofessionalsuccess=createAction('professionalloadhomesuccess',props<{professionalsss:Professional[]}>())
export const loadprofessionalfailure=createAction('professionalloadhomefailure',props<{error:any}>())