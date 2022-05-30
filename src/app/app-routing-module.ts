import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ViewOneFaceSnapComponent} from './view-one-face-snap/view-one-face-snap.component';

 const routes : Routes = [
   {path:'',component: LandingPageComponent},
   {path:'facesnaps/viewfacesnaps/:id',component: ViewOneFaceSnapComponent},
   {path: 'facesnaps', component: FaceSnapListComponent}
 ]

@NgModule({
   imports : [
    RouterModule.forRoot(routes)
  ],
   exports : [RouterModule]
})
export class AppRoutingModule{

}
