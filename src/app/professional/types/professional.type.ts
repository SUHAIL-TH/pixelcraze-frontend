export interface booking{
    name?:string,
    housename?:string,
    event?:string,
    place?:string,
    amount?:string,
    status?:boolean,
    phone?:number,
    date?:string
    professional?: {name : string, ownername:string,phone:number}
    
  }