import { Component, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import type { Character } from '../../../models/character';

@Component({
  selector: 'app-dragonball-add-character-form',
  imports: [],
  templateUrl: './dragonball-add-character-form.component.html',
  styleUrl: './dragonball-add-character-form.component.css'
})
export class DragonballAddCharacterFormComponent {
  public name: WritableSignal<string> = signal('');
  public power: WritableSignal<number> = signal(0);
  public newCharacter: OutputEmitterRef<Character> = output<Character>();

  public changeNewCharacterName(name: string): void {
    this.name.set(name);
  }

  public changeNewCharacterPower(power: string): void {
    this.power.set(parseInt(power));
  }

  public addCharecter(): void {
    if (!this._characterIsNotChecked()) {
      this._addCharacter();
    }
  }

  private _characterIsNotChecked(): boolean {
    return !this.name() || !this.power() || this.power() <= 0;
  }

  private _addCharacter(): void {
    this.newCharacter.emit
    ({
      id: uuidv4(),
      name: this.name(),
      power: this.power()
    });

    this._resetForm();
  }

  private _resetForm(): void {
    this.name.set('');
    this.power.set(0);
  }
}
