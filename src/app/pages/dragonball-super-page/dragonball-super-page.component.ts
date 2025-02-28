import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import type { Character } from '../../models/character';
import { DragonballCharacterListComponent } from '../../components/dragonballComponents/dragonball-character-list/dragonball-character-list.component';
import { DragonballAddCharacterFormComponent } from "../../components/dragonballComponents/dragonball-add-character-form/dragonball-add-character-form.component";
import { Constants } from '../../utils/constants';
import { DragonballCharactersService } from '../../services/dragonball-services/dragonball-characters.service';

const {
  DRAGONBALL_TYPES_CHARACTERS_ENUM
} = new Constants();

const {
  superCharacter: SUPER
} = DRAGONBALL_TYPES_CHARACTERS_ENUM;

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
export class DragonballSuperPageComponent implements OnInit {
  //INJECTS
  private _dragonballCharacterService: DragonballCharactersService = inject(DragonballCharactersService);

  //SIGNALS
  public listCharactersTitle: string = LIST_CHARACTERS_TITLE;
  public characters: WritableSignal<Array<Character>> = signal(new Array());

  ngOnInit(): void {
    this._getCharacters();
  }

  public addCharacter(newCharacter: Character): void {
    this._dragonballCharacterService.addDragonballCharacter(newCharacter, SUPER);
    this._getCharacters();
  }

  private _getCharacters(): void {
    this.characters.set(this._dragonballCharacterService.getDragonballCharacters(SUPER));
  }
}
