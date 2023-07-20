import { createFeatureSelector,createSelector } from "@ngrx/store";

import { UserState,BannerState } from "../types/user.type";



export const selectUserState=createFeatureSelector<UserState>('users')
export const selectBannerState=createFeatureSelector<BannerState>('banners')

export const selectUsers=createSelector(selectUserState,state=>state.users)
export const selectloading=createSelector(selectUserState,state=>state.loading)
export const selectloaded=createSelector(selectUserState,state=>state.loaded)

export const selectBanners=createSelector(selectBannerState,state=>state.banners)
export const selectBannerLoading=createSelector(selectBannerState,state=>state.loading)
export const selectBannerLoaded=createSelector(selectBannerState,state=>state.loaded)

