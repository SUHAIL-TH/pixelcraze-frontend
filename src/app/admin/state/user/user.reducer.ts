import { createReducer, on } from '@ngrx/store';
import { UserState, BannerState, ProfessionalState } from '../types/user.type';

import * as userAction from '../user/user.action';



export const initialState: UserState = {
  users: [],
  loading: false,
  loaded: false,
  error: null,
};
export const bannerinitialstate:BannerState={
    banners:[],
    loading:false,
    loaded:false,
    error:null
}
export const professionalinitialstate:ProfessionalState={
  professionals:[],
  loading:false,
  loaded:false,
  error:null
}
export const acceptedprofessionalinitialstate:ProfessionalState={
  professionals:[],
  loading:false,
  loaded:false,
  error:null
}

export const userReducer = createReducer(
  initialState,
  on(userAction.loaduser, (state) => ({
    ...state,
    loading: true,
  })),
  on(userAction.loadusersuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users,
  })),
  on(userAction.loaduserfailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export const bannerReducer=createReducer(
    bannerinitialstate,
    on(userAction.loadbanner,(state)=>({...state,loading:true})),
    on(userAction.loadbannersuccess,(state,{banners})=>({...state,loading:false,loaded:true,banners})),
    on(userAction.loadbannerfailure,(state,{error})=>({...state,loading:false,error}))
)

export const professionalReducer=createReducer(
  professionalinitialstate,
  on(userAction.loadprofessional,(state)=>({...state,loading:true})),
  on(userAction.loadprofessionalsuccess,(state,{professionals})=>({...state,loading:false,loaded:true,professionals})),
  on(userAction.loadprofessionalfailure,(state,{error})=>({...state,loading:false,error}))


)
export const acceptedprofessionalReducer=createReducer(
  acceptedprofessionalinitialstate,
  on(userAction.loadacceptedprofessional,(state)=>({...state,loading:true})),
  on(userAction.loadacceptedprofessionalsuccess,(state,{acceptedprofessionals})=>({...state,loading:false,loaded:true, professionals:acceptedprofessionals})),
  on(userAction.loadacceptedprofessionalfailure,(state,{error})=>({...state,loading:false,error}))


)
