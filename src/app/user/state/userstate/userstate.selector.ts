import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProfessionalState } from "../usertypes/usertypes";

export const selectProfessionallistState=createFeatureSelector<ProfessionalState>('professionalslist')

export const selectProfessionallist=createSelector(selectProfessionallistState,state=>state.professionals)
export const selectProfessionallistloaded=createSelector(selectProfessionallistState,state=>state.loaded)
export const selectProfessionallistloading=createSelector(selectProfessionallistState,state=>state.loading)