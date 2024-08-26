import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDragResize2Component } from './ngx-drag-resize2.component';

describe('NgxDragResize2Component', () => {
  let component: NgxDragResize2Component;
  let fixture: ComponentFixture<NgxDragResize2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDragResize2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDragResize2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
