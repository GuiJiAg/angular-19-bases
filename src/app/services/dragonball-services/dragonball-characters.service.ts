import { Injectable, signal, WritableSignal } from '@angular/core';
import type { Character } from '../../models/character';
import { v4 as uuidv4 } from 'uuid';
import { Constants } from '../../utils/constants';
import { DragonballTypesCharactersEnum } from '../../enums/dragonball-enums/dragonball-types-characters-enum';

const {
  DRAGONBALL_TYPES_CHARACTERS_ENUM
} = new Constants();

const {
  normalCharacter: NORMAL,
  superCharacter: SUPER
} = DRAGONBALL_TYPES_CHARACTERS_ENUM;

const DRAGONBALL_CHARACTERS_LIST: Array<Character> = [
  {
    id: uuidv4(),
    name: 'Goku',
    power: 9000
  },
  {
    id: uuidv4(),
    name: 'Vegeta',
    power: 8000
  },
  {
    id: uuidv4(),
    name: 'Yamcha',
    power: 500
  },
  {
    id: uuidv4(),
    name: 'Piccolo',
    power: 3000
  }
];

const DRAGONBALL_SUPER_CHARACTERS_LIST: Array<Character> = [
  {
    id: uuidv4(),
    name: 'Bill',
    power: 9000000
  }
]

@Injectable({
  providedIn: 'root'
})
export class DragonballCharactersService {
  private _normalDragonballCharacters: WritableSignal<Array<Character>> = signal(DRAGONBALL_CHARACTERS_LIST);
  private _superDragonballSuperCharacters: WritableSignal<Array<Character>> = signal(DRAGONBALL_SUPER_CHARACTERS_LIST);

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
}
