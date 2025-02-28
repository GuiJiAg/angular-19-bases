import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballAddCharacterFormComponent } from './dragonball-add-character-form.component';

describe('DragonballAddCharacterFormComponent', () => {
  let component: DragonballAddCharacterFormComponent;
  let fixture: ComponentFixture<DragonballAddCharacterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballAddCharacterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballAddCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
