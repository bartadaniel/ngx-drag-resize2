# ngx-drag-resize2

The Angular library provides opportunity to use drag and resize functionality on HTML element.

This library is a fork of the [ngx-drag-resize](https://github.com/dmytro-parfenov/ngx-drag-resize) library by dmytro-parfenov. 

Changes made: 
- Updated to Angular 18
- Changed `ngxResizeAspectRatio` to be expected as `width/height`

# Demo
![Preview](https://github.com/bartadaniel/ngx-drag-resize2/blob/main/demo.gif?raw=true)

[Live Demo here](https://ngx-drag-resize2.web.app/)

 
## Install

NPM: `npm install ngx-drag-resize --save`

Yarn: `yarn add ngx-drag-resize`

## Usage

Import `NgxDragResizeModule` to your working module

```
import {NgxDragResizeModule} from 'ngx-drag-resize';

@NgModule({
  imports: [
    NgxDragResizeModule
  ]
})
export class AppModule { }
```

Use directives in your template

Simple drag

```
<div ngxDrag>drag me</div>
```

Initiates only by dragging `ngxDragHandle`

```
<div ngxDrag>
  <span>drag me</span>
  <span ngxDragHandle>handle</span>
</div>
```

A simple resize will work only by using scroll or two fingers on touch devices

```
<div ngxResize>resize me</div>
```

Resize using borders.
You have to style all elements as you want.

```
<div ngxResize>
  <span>resize me</span>
  <div [ngxResizeHandle]="NgxResizeHandleType.TopLeft"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.Top"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.TopRight"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.Right"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.BottomRight"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.Bottom"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.BottomLeft"></div>
  <div [ngxResizeHandle]="NgxResizeHandleType.Left"></div>
</div>
```

More examples you can find in [demo app](https://github.com/bartadaniel/ngx-drag-resize2/tree/main/projects/ngx-drag-resize-demo)
