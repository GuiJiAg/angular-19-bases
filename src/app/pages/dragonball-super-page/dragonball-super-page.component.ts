import { Component, signal, WritableSignal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import type { Character } from '../../models/character';
import { DragonballCharacterListComponent } from '../../components/dragonballComponents/dragonball-character-list/dragonball-character-list.component';
import { DragonballAddCharacterFormComponent } from "../../components/dragonballComponents/dragonball-add-character-form/dragonball-add-character-form.component";

const CHARACTER_LIST: Array<Character> = [
  {
    id: uuidv4(),
    name: 'Bill',
    power: 9000000
  }
]

const LIST_CHARACTERS_TITLE: string = 'Lista de personajes Dragon Ball Super';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    DragonballCharacterListComponent,
    DragonballAddCharacterFormComponent
],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {
  public listCharactersTitle: string = LIST_CHARACTERS_TITLE;
  public characters: WritableSignal<Array<Character>> = signal(CHARACTER_LIST);

  public addCharacter(newCharacter: Character): void {
    /**
     * Con este formato, quiere decir que, para el valor actual (currentCharacters),
     * el cual es un Array, se le va a añadir un nuevo valor al final (newCharacter).
     */
    this.characters.update(currentCharacters => [...currentCharacters, newCharacter])
  }
}
