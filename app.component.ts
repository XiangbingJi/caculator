import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operation: string  = '';
  result: number = 0;
  operators: string[] = ['+','-','*','/','.'];
 
  append(element: string) :void {
  	if (this.operation.length >= 10) alert("sorry, no more input is allowed!");
  	else {
  		if (this.operators.indexOf(element) === -1) this.operation += element;
  		else {
  			// the first element in the operation cannot be a operator
	  		if (this.operation === '') this.operation = '';
	  		// if the last element in the operation is a opeartion, replace that operation with the current operation
	  		else if (this.operators.indexOf(this.operation.slice(-1)) > -1)  {
	  			this.operation = this.operation.slice(0, this.operation.length - 1);	
	  			this.operation += element;
	  		}
	  		else this.operation += element;
	  	}
  	}
  }

  clear() : void{
  	this.operation = '';
  	this.result = 0;
  }

  evaluate(){
    this.result = eval(this.operation);
  }
}
