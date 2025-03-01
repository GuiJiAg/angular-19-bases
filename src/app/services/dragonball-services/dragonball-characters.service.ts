import { effect, EffectRef, Injectable, signal, WritableSignal } from '@angular/core';
import type { Character } from '../../models/character';
import { Constants } from '../../utils/constants';
import { DragonballTypesCharactersEnum } from '../../enums/dragonball-enums/dragonball-types-characters-enum';

const {
  DRAGONBALL_TYPES_CHARACTERS_ENUM
} = new Constants();

const {
  normalCharacter: NORMAL,
  superCharacter: SUPER
} = DRAGONBALL_TYPES_CHARACTERS_ENUM;

@Injectable({
  providedIn: 'root'
})
export class DragonballCharactersService {
  //SIGNALS
  private _normalDragonballCharacters: WritableSignal<Array<Character>> = signal(this._loadDragonBallCharactersList(NORMAL));
  private _superDragonballSuperCharacters: WritableSignal<Array<Character>> = signal(this._loadDragonBallCharactersList(SUPER));

  //EFFECTS -> Cada vez que cambia un signal, se ejecutan los effects
  private _saveCharactersInLocalStorageEffect: EffectRef = effect(() => {
    this._saveCharactersInLocalStorage();
  });

  constructor() { }

  public getDragonballCharacters(typeDragonBallSuper: DragonballTypesCharactersEnum): Array<Character> {
    switch (typeDragonBallSuper) {
      case NORMAL:
        return this._normalDragonballCharacters();
      case SUPER:
        return this._superDragonballSuperCharacters();
      default:
        return new Array<Character>();
    }
  }

  public addDragonballCharacter(newCharacter: Character, typeDragonBallSuper: DragonballTypesCharactersEnum): void {
    switch (typeDragonBallSuper) {
      case NORMAL:
        this._addNormalDragonballCharacter(newCharacter);
        break;
      case SUPER:
        this._addSuperDragonballCharacter(newCharacter);
        break;
      default:
        break;
    }
  }

  private _addNormalDragonballCharacter(newCharacter: Character): void {
    /**
     * Con este formato, quiere decir que, para el valor actual (currentCharacters),
     * el cual es un Array, se le va a añadir un nuevo valor al final (newCharacter).
     */
    this._normalDragonballCharacters.update(currentCharacters => [...currentCharacters, newCharacter]);
  }

  private _addSuperDragonballCharacter(newCharacter: Character): void {
    /**
     * Con este formato, quiere decir que, para el valor actual (currentCharacters),
     * el cual es un Array, se le va a añadir un nuevo valor al final (newCharacter).
     */
    this._superDragonballSuperCharacters.update(currentCharacters => [...currentCharacters, newCharacter]);
  }

  private _saveCharactersInLocalStorage(): void {
    localStorage.setItem('normalDragonballCharacters', JSON.stringify(this._normalDragonballCharacters()));
    localStorage.setItem('superDragonballSuperCharacters', JSON.stringify(this._superDragonballSuperCharacters()));
  }

  private _loadDragonBallCharactersList(typeDragonBallSuper: DragonballTypesCharactersEnum): Array<Character> {
    switch(typeDragonBallSuper) {
      case NORMAL:
        return this._loadNormalDragonBallCharactersList();
      case SUPER:
        return this._loadSuperDragonBallCharactersList();
      default:
        return new Array();
    }
  }

  private _loadNormalDragonBallCharactersList(): Array<Character> {
    const characters = localStorage.getItem('normalDragonballCharacters');

    return this._returnLocalStorageCharactersItem(characters);
  };

  private _loadSuperDragonBallCharactersList(): Array<Character> {
    const characters = localStorage.getItem('superDragonballSuperCharacters');

    return this._returnLocalStorageCharactersItem(characters);
  };

  private _returnLocalStorageCharactersItem(characters: string | null): Array<Character> {
    return characters ? JSON.parse(characters) : new Array();
  }
}
