import {Component} from '@angular/core';
import {NgxResizeHandleType} from 'ngx-drag-resize2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly handleType = NgxResizeHandleType;

}
