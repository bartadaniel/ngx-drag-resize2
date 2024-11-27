import {Component} from '@angular/core';
import {NgxDragResizeModule, NgxResizeHandleType} from 'ngx-drag-resize';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NgxDragResizeModule]
})
export class AppComponent {

  readonly handleType = NgxResizeHandleType;

}
