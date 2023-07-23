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