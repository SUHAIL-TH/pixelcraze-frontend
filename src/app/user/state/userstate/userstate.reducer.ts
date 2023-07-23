import { createReducer, on } from "@ngrx/store";
import { ProfessionalState } from "../usertypes/usertypes";
import *as userstateaction from '../userstate/userstate.action'

export const professionalinitialstate:ProfessionalState={
    professionals:[],
    loading:false,
    loaded:false,
    error:null
  }


export const professionallistreducer=createReducer(
    professionalinitialstate,
    on(userstateaction.loadprofessional,(state)=>({...state,loading:true})),
    on(userstateaction.loadprofessionalsuccess,(state,{professionalsss})=>({...state,loading:false,loaded:true,professionals:professionalsss})),
    on(userstateaction.loadprofessionalfailure,(state,{error})=>({...state,loading:false,error}))
)