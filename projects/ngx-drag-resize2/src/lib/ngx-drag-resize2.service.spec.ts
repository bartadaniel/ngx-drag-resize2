import { TestBed } from '@angular/core/testing';

import { NgxDragResize2Service } from './ngx-drag-resize2.service';

describe('NgxDragResize2Service', () => {
  let service: NgxDragResize2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDragResize2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
