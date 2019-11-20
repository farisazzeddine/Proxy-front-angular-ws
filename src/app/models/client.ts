export interface Client{
    id?:number,
    Conseiller_id:number;
    Agence_id:number;
    nom:string ;
    prenom:string;
    adresse:string ;
    cin: string;
    codePostal:number;
    ville: string;
    telephone:string;
    compteCourant:boolean;
    compteEpargne:boolean;
}