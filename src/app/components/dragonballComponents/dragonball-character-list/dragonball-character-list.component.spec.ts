import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballCharacterListComponent } from './dragonball-character-list.component';

describe('DragonballCharacterListComponent', () => {
  let component: DragonballCharacterListComponent;
  let fixture: ComponentFixture<DragonballCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballCharacterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
