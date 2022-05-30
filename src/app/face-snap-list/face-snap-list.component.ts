import { Component, OnInit } from '@angular/core';
import {FaceSnap} from '../models/faceSnap';
import {FaceSnapService} from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  mySnaps : FaceSnap[];

  mysnapWithLocation! : FaceSnap;

  constructor(private faceSnapService : FaceSnapService) { }

  ngOnInit(): void {

    //Using FaceSnap as ObjectMapping
    this.mySnaps = this.faceSnapService.getAllSnaps();
    console.log("allSnaps : ",this.mySnaps);
  }

}
