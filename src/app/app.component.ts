import { Component } from '@angular/core';

export interface Post {
  title:string
  id?:any
  text:string  
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Мое первое приложение';

}
