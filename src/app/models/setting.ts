export interface Setting{
    id?:number;
    Agence_id:number;
    Gerant_id:number;
    commissionVirement:number;
    commissionRetrait:number;
    commissionRetraitCheque:number;
    commissionVersement:number;
    fraisOuvertureCompte:number;
    choixChangementCrtGuichet:number;
}