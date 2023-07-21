

import { createAction, createReducer, props } from "@ngrx/store";

import { User } from "../types/user.type";
import { Banner } from "../types/user.type";
import { Professional } from "../types/user.type";

export const loaduser=createAction('userload')
export const loadusersuccess=createAction("loadusersuccess",props<{users: User[]}>())
export const loaduserfailure=createAction("loaduserfailure",props<{error:any}>())


export const loadbanner=createAction('bannerload')
export const loadbannersuccess=createAction('bannersuccess',props<{banners:Banner[]}>())
export const loadbannerfailure=createAction("bannerloadfailure",props<{error:any}>())

export const loadprofessional=createAction("professionalload")
export const loadprofessionalsuccess=createAction('professionalloadsuccess',props<{professionals:Professional[]}>())
export const loadprofessionalfailure=createAction('professionalloadfailure',props<{error:any}>())