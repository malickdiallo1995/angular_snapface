import { Injectable } from '@angular/core';
import {FaceSnap} from '../models/faceSnap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  /**
   * Init Static face List of object of type facesnap
   */
 private mySnaps : FaceSnap[] = [{
    id : 1,
    title : 'Black Face',
    description : "Mon Premier Snap dans l'application SnapFace ",
    createdDate : new Date(),
    snaps :250,
    imageUrl : 'https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg'
  },
    {
      id: 2,
      title : 'Solution Maker',
      description : "Mon Deuxieme Snap dans l'application SnapFace" ,
      createdDate : new Date(),
      snaps :5,
      imageUrl : 'https://ik.imagekit.io/4gwffjrrl/Sm_title_CRSx5pzLp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652971828110'
    },
    {
      id : 3,
      title : 'Peluche',
      description : "Mon Troisieme Snap dans l'application SnapFace",
      createdDate : new Date(),
      snaps :100,
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location : 'Dakar'
    }
  ];

  constructor() { }

  getAllSnaps(): FaceSnap []{
    return this.mySnaps;
  }

  getOneSnaps(id): FaceSnap{
    const facesnap  = this.mySnaps.find(snaps=>snaps.id==id);
    if (facesnap){
      return facesnap;
    }else{
      throw  new Error('Face snap not found');
    }
  }

  /**
   *
   * @param facesnapsId
   */
  snapsFacebyId(facesnapsId : number, up : Boolean) : void{
    const facesnap  = this.getOneSnaps(facesnapsId);
    up?facesnap.snaps++ : facesnap.snaps--;
    //return  facesnap;
  }
}
