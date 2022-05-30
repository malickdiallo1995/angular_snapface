import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/faceSnap';
import {ActivatedRoute, Router} from '@angular/router';
import {FaceSnapService} from '../services/face-snap.service';

@Component({
  selector: 'app-view-one-face-snap',
  templateUrl: './view-one-face-snap.component.html',
  styleUrls: ['./view-one-face-snap.component.scss']
})
export class ViewOneFaceSnapComponent implements OnInit {
  faceSnap : FaceSnap;
  button_text: string;
  isSnaped : boolean;
  faceSnapId : number;
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;


  constructor(private activatedRoute : ActivatedRoute, private faceSnapService : FaceSnapService) {

  }

  ngOnInit(): void {
    const faceSnapId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')) ;
    this.faceSnap = this.faceSnapService.getOneSnaps(faceSnapId);
    //get and affect
    this.isSnaped = false;
    this.button_text = 'Oh Snaps!';
  }




  //Ajouter un snap en incrementant le nombre de snap
  onSnap(){
    if(!this.isSnaped){ //not snaped yet
      console.log("id : ",this.faceSnap.id);
      this.faceSnapService.snapsFacebyId(this.faceSnap.id,true);
      this.button_text='Oops, unSnap!';
      this.isSnaped = true;
    }else{ //snaped yet
      this.faceSnapService.snapsFacebyId(this.faceSnap.id,false);
      this.button_text='Oh Snaps!';
      this.isSnaped = false;
    }
  }

}
