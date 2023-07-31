export interface Professional{
    name?:string
    _id?:string,
    photo?:string,
    experinces?:number,
    specialized?:string,
    email?:string,
    place?:string,
    phone?:number,
    discription?:string,
    ownername?:string,  
}
export interface ProfessionalState{
    professionals:ReadonlyArray<Professional>
    loading:boolean,
    loaded:boolean,
    error:any

}
export interface bookings{
    name?:string,
    housename?:string,
    event?:string,
    place?:string,
    amount?:string,
    status?:boolean,
    phone?:number,
    date?:string,
    professional?: {name : string, ownername:string,phone:number,_id:string}
    
  }