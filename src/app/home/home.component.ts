import { Component, OnInit,Inject} from '@angular/core';
import { Router } from '@angular/router'; 
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import {MatDialog, MatDialogRef, MatDialogConfig,MAT_DIALOG_DATA} from '@angular/material';
import {CardDetailComponent} from '../card-detail/card-detail.component';
import {GetCardItemsService} from '../services/get-card-items.service';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any>;
  favs=[];
  favCounts={};
  id:number;
  favItems=false;
  favCount=0;
  nonFavCount=0;

  constructor(private http: Http,
              private router: Router,
              public dialog: MatDialog,
              private _getCardItemsService:GetCardItemsService){}

  ngOnInit(){

     this.favItems=false;

     this._getCardItemsService.getCards().subscribe(data => {
				        this.items = data;
                this.getFavouritesCount(this.items);
                this.getNonFavourites(this.items);
				      });

  }
  

  getFavouritesCount(values){
    for(let i=0;i<values.length;i++){
      if(values[i].isFavourite){
        this.favCount++;
      }
    }
   return this.favCount;
  }

  getFavoriteItems(){
    this.favItems=!this.favItems;
    this.favs=[];
    console.log(this.favItems);
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].isFavourite){
        this.favs.push(this.items[i]);
      }
    }
    return this.favs;
  }

  getNonFavourites(values){
    for(let i=0;i<values.length;i++){
      if(!values[i].isFavourite){
        this.nonFavCount++;
      }
    }
    this.favCounts={
      favC:this.favCount,
      nonfc:this.nonFavCount
    }
    return this.favCounts;

  }

  getCardDetails(id){
     this.router.navigate(['card-detail', id]);
  }

	openDialog(id){

   const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  	 dialogConfig.data={
  		company:id.company,
  		description: id.description
  	}
    // 	dialogConfig.position = {
    //     'top': '-800px',
    //     ou
    //     left: '0'
    // };
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog,dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.id = result;
    });
  }


  RemoveFavourite(item){
    item.isFavourite=false;
    this.nonFavCount++;
    this.favCount--;
    this.favCounts={
      favC:this.favCount,
      nonfc:this.nonFavCount
    }
    return this.favCounts;
    
  }


  makeFavourite(item){
    item.isFavourite=true;
    this.favCount++;
    this.nonFavCount--;
    this.favCounts={
      favC:this.favCount,
      nonfc:this.nonFavCount
    }
    return this.favCounts;
  }

 

}

@Component({
  selector: 'dialog-view',
  templateUrl: 'dialog-view.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

