import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class GetCardItemsService {

  constructor(private http:Http) { }

  getCards(){
  	 return this.http.get('http://localhost:4200/assets/data.json')
		   			.map(data => data.json() as Array<any>)
		   			.catch(this.handleError); 
				    
  }

   private handleError(error: Response) { 
      console.error(error); 
      return Observable.throw(error.json().error()); 
   } 

}
