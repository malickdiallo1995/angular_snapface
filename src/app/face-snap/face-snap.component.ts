import { ThrowStmt } from '@angular/compiler';
import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/faceSnap';
import {FaceSnapService} from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  isSnaped!: Boolean;
  button_text!: string;
  @Input()faceSnap: FaceSnap;

  constructor(private facesnapService : FaceSnapService) {
  }

  ngOnInit(){
    //get and affect
    this.isSnaped = false;
    this.button_text = 'Oh Snaps!';
  }

  //Ajouter un snap en incrementant le nombre de snap
  onSnap(){
    if(!this.isSnaped){ //not snaped yet
      console.log("id : ",this.faceSnap.id);
      this.facesnapService.snapsFacebyId(this.faceSnap.id,true);
      this.button_text='Oops, unSnap!';
      this.isSnaped = true;
    }else{ //snaped yet
      this.facesnapService.snapsFacebyId(this.faceSnap.id,false);
      this.button_text='Oh Snaps!';
      this.isSnaped = false;
    }
  }
}
