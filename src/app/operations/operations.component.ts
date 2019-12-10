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
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

  operations: Operation[] = [];
  isClosed:boolean=true;
  showFiller = false;
  tOperation:boolean=true;
  isVirement:boolean=true;
  isRetrait:boolean=true;
  isVersement:boolean=true;
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
    openViremet(){ this.isVirement=!this.isVirement;
      this.operation.virement=!this.isVirement
    }
    opentVersement(){this.isVersement=!this.isVersement;
      this.operation.versement=!this.isVersement
    } 
    opentRetrait(){this.isRetrait=!this.isRetrait,
      this.operation.retrait=!this.isRetrait
    }
  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.getOperation();
    
  }
getOperation(){
  this.operationService.getAll().
  subscribe(operations =>this.operations=operations);
  
}
CreateOperation(){
this.operationService.create(this.operation).
 subscribe(response=>{
 this.operation={
  versement:false, virement:false, retrait:false, montantOperation:null, numCompte_id:null, virementVersCompte:null,
  };
  console.log(response)
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

