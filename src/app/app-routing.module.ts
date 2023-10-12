import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

const routes: Routes = [
  {path:'odd',component:OddComponent},
  {path:'even',component:EvenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
