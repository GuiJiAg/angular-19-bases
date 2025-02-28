import { Component, input, InputSignal } from '@angular/core';
import type { Character } from '../../../models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dragonball-character-list',
  imports: [
    CommonModule
  ],
  templateUrl: './dragonball-character-list.component.html',
  styleUrl: './dragonball-character-list.component.css'
})
export class DragonballCharacterListComponent {
  public listCharactersTitle: InputSignal<string> = input.required<string>();
  public characters: InputSignal<Array<Character>> = input.required<Array<Character>>();

  public haveCorrectPower(power: number): boolean {
    return power > 500 ? true : false;
  }

  public powerClass(power: number): Object {
    let overPowered: boolean = power >= 9000 ? true : false;

    return {
      'text-danger': overPowered
    }
  }
}
