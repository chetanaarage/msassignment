import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import {Router} from '@angular/router';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

   constructor(private http: Http,private route: ActivatedRoute,private router: Router) { }
	productID: number;
	item:any;
	items=[];
	result:any;

  ngOnInit() {
  	this.route.params.subscribe(
      params => this.productID = params['id']
  	);

  	 console.log("this.productID",this.productID);

  	 return this.http.get('http://localhost:4200/assets/data.json')
					.subscribe(data => {
						this.items=data.json();
						this.result=this.items.find(item=>item._id === this.productID);
						console.log("this.items",this.result);
					});
	
  }

  back(): void {
    this.router.navigate(['/']);
  }


}

