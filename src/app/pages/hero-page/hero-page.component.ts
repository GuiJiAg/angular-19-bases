import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { Constants } from '../../utils/constants';
import { CommonModule } from '@angular/common';

const {
  HERO_CHANGE_NAME_EXAMPLE_VALUE,
  HERO_CHANGE_AGE_EXAMPLE_VALUE,
  HERO_CHANGE_NAME_EXAMPLE2_VALUE,
  HERO_CHANGE_AGE_EXAMPLE2_VALUE
} = new Constants();

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  public name: WritableSignal<string> = signal(HERO_CHANGE_NAME_EXAMPLE_VALUE);
  public age: WritableSignal<number> = signal(HERO_CHANGE_AGE_EXAMPLE_VALUE);
  public heroDescription: Signal<string> = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });
  public nameCapitalized: Signal<string> = computed(() => {
    return this.name().toUpperCase();
  });

  public changeHero(): void {
    this.name.set(HERO_CHANGE_NAME_EXAMPLE2_VALUE);
    this.age.set(HERO_CHANGE_AGE_EXAMPLE2_VALUE);
  }

  public changeAge(): void {
    this.age.set(60);
  }

  public resetForm(): void {
    this.name.set(HERO_CHANGE_NAME_EXAMPLE_VALUE);
    this.age.set(HERO_CHANGE_AGE_EXAMPLE_VALUE);
  }
}
