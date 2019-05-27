import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTreeViewComponent } from './file-tree-view.component';

describe('FileTreeViewComponent', () => {
  let component: FileTreeViewComponent;
  let fixture: ComponentFixture<FileTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
