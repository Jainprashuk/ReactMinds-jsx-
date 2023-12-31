import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatisjsxComponent } from './mycomponents/whatisjsx/whatisjsx.component';
import { BasicsyntaxComponent } from './mycomponents/basicsyntax/basicsyntax.component';
import { JsxelementsComponent } from './mycomponents/jsxelements/jsxelements.component';
import { ExpressionsComponent } from './mycomponents/expressions/expressions.component';
import { JsxattributesComponent } from './mycomponents/jsxattributes/jsxattributes.component';
import { JsxfragmentsComponent } from './mycomponents/jsxfragments/jsxfragments.component';
import { YoutubeComponent } from './mycomponents/youtube/youtube.component';
import { QuizComponent } from './mycomponents/quiz/quiz.component';
import { MycompilerComponent } from './mycomponents/mycompiler/mycompiler.component';

const routes: Routes = [
  { path: '', component: WhatisjsxComponent, outlet: 'secondary' },
  { path: 'whatisjsx', component: WhatisjsxComponent, outlet: 'secondary' },
  { path: 'basicsyntax', component: BasicsyntaxComponent, outlet: 'secondary' },
  { path: 'jsxelements', component: JsxelementsComponent, outlet: 'secondary' },
  { path: 'expressions', component: ExpressionsComponent, outlet: 'secondary' },
  { path: 'jsxattributes', component: JsxattributesComponent, outlet: 'secondary' },
  { path: 'jsxfragments', component: JsxfragmentsComponent, outlet: 'secondary' },
  { path: 'youtube', component: YoutubeComponent, outlet: 'secondary' },
  { path: 'quiz', component: QuizComponent, outlet: 'secondary' },
  { path: 'mycompiler', component: MycompilerComponent, outlet: 'secondary' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
