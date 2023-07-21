import { Injectable } from "@angular/core";
import { createEffect,Actions,ofType } from "@ngrx/effects";
import *as UserAction from '../user/user.action'


import { User } from "../types/user.type";
import { AdminService } from "src/app/service/admin/admin.service";
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";



@Injectable()
export class UserEffects{
    constructor(private actions$:Actions,private adminService:AdminService){}
    loaduser$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserAction.loaduser),
            mergeMap(()=>
            this.adminService.getUser().pipe(
                map(users=>(UserAction.loadusersuccess({users:users}))),
                catchError((error)=>of(UserAction.loaduserfailure({error})))
            ))
            
        )
    })
    loadbanner$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserAction.loadbanner),
            mergeMap(()=>
            this.adminService.getbanner().pipe(
                map(banners=>(UserAction.loadbannersuccess({banners:banners}))),
                catchError((error)=>of(UserAction.loadbannerfailure({error})))
            ))
        )
    })
    loadprofessional$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(UserAction.loadprofessional),
            mergeMap(()=>
            this.adminService.getprofessional().pipe(
                map(professionals=>(UserAction.loadprofessionalsuccess({professionals:professionals}))),
                catchError((error)=>of(UserAction.loadprofessionalfailure({error})))
            ))
        )
    })
}