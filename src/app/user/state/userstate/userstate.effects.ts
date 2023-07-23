import { Injectable } from "@angular/core";
import { createEffect,Actions,ofType } from "@ngrx/effects";

import *as userstateaction from '../userstate/userstate.action'
import { UserServiceService } from "src/app/service/user/user-service.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UserStateEffects{
    constructor(private userservice:UserServiceService ,private action$:Actions){}
        loadprofessionallist$=createEffect(()=>{
        return this.action$.pipe(
            ofType(userstateaction.loadprofessional), 
        mergeMap(()=>
        this.userservice.getprofessionallist().pipe(
            map(professionallist=>(userstateaction.loadprofessionalsuccess
            ({professionalsss:professionallist}))),
            catchError((error)=>of(userstateaction.loadprofessionalfailure({error})))
        ))
        )
        
        })

}