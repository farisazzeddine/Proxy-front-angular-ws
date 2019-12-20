import { Component, OnInit } from '@angular/core';
import { OperationService } from '../service/operation.service';
import { Operation } from '../models/operation';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})


export class OperationsComponent implements OnInit {
 

  headElements = [
    "#","La date","Numéro de compte",
  "Type Opération", "Montant d'opération",
  "Nouveau Solde","Paramétre"
];

  operations: Operation[] = [];

  isClosed:boolean=true;
  showFiller = false;

  tOperation:boolean=true;
  isVirement:boolean=false;
  isRetrait:boolean=false;

  isVersement:boolean=false;
  public loggedIn:boolean;

  public operation={
    versement:false, virement:false, retrait:false, montantOperation:null, numCompte_id:null, virementVersCompte:null,
    };
  openSide(){
    this.isClosed=!this.isClosed;
    }
    openOperation(){
     this.tOperation=!this.tOperation;
    
   }
    openViremet(){ 
      this.isVirement=!this.isVirement;
      this.operation.virement=!this.isVirement;
      this.isVersement=false;
      this.isRetrait=false;
    }
    opentVersement(){
      this.isVersement=!this.isVersement;
      this.operation.versement=!this.isVersement;
      this.isVirement=false;
      this.isRetrait=false;
    } 
    opentRetrait(){
      this.isRetrait=!this.isRetrait,
      this.operation.retrait=!this.isRetrait
      this.isVersement=false;
      this.isVirement=false;
    }
  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.getOperation();
    
  }
getOperation(){
  this.operationService.getAll().
  subscribe(operations =>{
    this.operations=operations
  // console.log(this.operations[0].opertaion_virement[0].virementVersCompte);
    // console.log(this.operations);
    })  

   
    
  
}
CreateOperation(){
this.operationService.create(this.operation).
 subscribe(response=>{
 this.operation={
  versement:false, virement:false, 
  retrait:false, montantOperation:null,
   numCompte_id:null, virementVersCompte:null,
  };
  this.getOperation();
}
)

}
deleteOperation(Operation){
  this.operationService.delete(Operation).subscribe(()=>{
    let index = this.operations.indexOf(Operation);
    this.operations.splice(index, 1);
    this.getOperation();
    console.log("true");
  })
}
}

