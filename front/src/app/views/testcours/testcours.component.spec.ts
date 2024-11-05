import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcoursComponent } from './testcours.component';

describe('TestcoursComponent', () => {
  let component: TestcoursComponent;
  let fixture: ComponentFixture<TestcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
