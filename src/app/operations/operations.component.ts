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
  operations: Operation[] = [];
  disableSelect = new FormControl(false);
  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals= [
    'Retrait',
     'Versement',
      'Vairement'
  ];
  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.getOperation();
    
  }
getOperation(){
  this.operationService.getAll().subscribe(operations =>this.operations=operations);
  
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

