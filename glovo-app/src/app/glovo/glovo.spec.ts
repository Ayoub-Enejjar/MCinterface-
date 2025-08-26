import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glovo } from './glovo';

describe('Glovo', () => {
  let component: Glovo;
  let fixture: ComponentFixture<Glovo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glovo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Glovo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
