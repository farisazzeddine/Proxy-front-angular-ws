import { Component, OnInit } from '@angular/core';
import { OperationService } from '../service/operation.service';
import { Operation } from '../models/operation';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {
  operations: Operation[] = [];

  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.getOperations();
  }
getOperations(){
  this.operationService.findAllOperation().subscribe(operations =>this.operations=operations);
  
}
}
