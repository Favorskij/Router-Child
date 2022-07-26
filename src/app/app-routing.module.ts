import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";
import {AppComponent} from "./app.component";

const routes: Routes = [



  // Страница /one
  {path: 'one', component: PageOneComponent},

  // Страница /two
  {path: 'two', component: PageTwoComponent, children: [

      // Страница /two/child-a
      {path: "child-a", component: ChildAComponent},
      {path: "child-b", component: ChildBComponent}
    ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
