export class Mandals{
    mandal_id!:number
    mandal_name!:string
    district_id!:string
    
}
export class Countries{
    country_id!:number
    country_name!:string

}
export class States{
    state_id!:number
    state_name!:string
    country_id!:number

}
export class Districts{
    district_id!:number
    district_name!:string
    state_id!:number

}

export class Address{
    AddressId!:number;
    UserID! : number
    // country_id!:number;
    // state_id!: number;
    // district_id!: number;
    // mandal_id!: number;
    Village!: string
    Area!: string
}

export class AddressList{
    AddressId!:number;
    UserID! : number
    country!:string;
    state!: string;
    district!: string;
    mandal!: string;
    village!: string
    area!: string
}

export class Friends{
    name!:string;
    likeCount!:number;
    likeRequestPending?:boolean;
}