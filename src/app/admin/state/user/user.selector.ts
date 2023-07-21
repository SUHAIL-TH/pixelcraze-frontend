import { createFeatureSelector,createSelector } from "@ngrx/store";

import { UserState,BannerState, ProfessionalState } from "../types/user.type";



export const selectUserState=createFeatureSelector<UserState>('users')
export const selectBannerState=createFeatureSelector<BannerState>('banners')
export const selectProfessionalState=createFeatureSelector<ProfessionalState>('professionals')
export const selectacceptedprofessionals=createFeatureSelector<ProfessionalState>('acceptedprofessionals')

export const selectUsers=createSelector(selectUserState,state=>state.users)
export const selectloading=createSelector(selectUserState,state=>state.loading)
export const selectloaded=createSelector(selectUserState,state=>state.loaded)

export const selectBanners=createSelector(selectBannerState,state=>state.banners)
export const selectBannerLoading=createSelector(selectBannerState,state=>state.loading)
export const selectBannerLoaded=createSelector(selectBannerState,state=>state.loaded)

export const selectProfessionals=createSelector(selectProfessionalState,state=>state.professionals)
export const selectProfessionalsloaded=createSelector(selectProfessionalState,state=>state.loaded)
export const selectProfessionalsloading=createSelector(selectProfessionalState,state=>state.loading)

export const selectacceptedProfessionals=createSelector(selectacceptedprofessionals,state=>state.professionals)
export const selectacceptedProfessionalsloaded=createSelector(selectacceptedprofessionals,state=>state.loaded)
export const selectacceptedProfessionalsloading=createSelector(selectacceptedprofessionals,state=>state.loading)

