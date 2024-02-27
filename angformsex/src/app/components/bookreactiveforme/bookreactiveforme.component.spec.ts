import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookreactiveformeComponent } from './bookreactiveforme.component';

describe('BookreactiveformeComponent', () => {
  let component: BookreactiveformeComponent;
  let fixture: ComponentFixture<BookreactiveformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookreactiveformeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookreactiveformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
