import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";
import { Constants } from "../../utils/constants";

const {
  ZERO_NUMBER,
  BUTTON_ADD_TEXT,
  BUTTON_SUBSTRAC_TEXT,
  BUTTON_RESET_COUNTER_TEXT,
  VALUE_ADD_NUMBER,
  VALUE_SUBSTRAC_NUMBER,
  VALUE_INITIAL_COUNTER_NUMBER
} = new Constants();

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  standalone: true,
  styleUrl: './counter-page.component.css',
  /**
   * De esta manera, se desactiva Zone.js, lo cual hace que el componente sea más liviano,
   * pero desactiva la reactividad del componente para aquellos campos que no sean "Signals"
   * y cuyos eventos de cambios no sean "OnPush"
   */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  public addButtonText: string = BUTTON_ADD_TEXT;
  public subtractButtonText: string = BUTTON_SUBSTRAC_TEXT;
  public resetCounterButtonText: string = BUTTON_RESET_COUNTER_TEXT;
  public addOne: number = VALUE_ADD_NUMBER;
  public subtractOne: number = VALUE_SUBSTRAC_NUMBER;
  public counter: number = VALUE_INITIAL_COUNTER_NUMBER;

  /**
   * Los "Signals" son más eficientes y funcionan sin Zone.js
   */
  public counterSignal: WritableSignal<number> = signal(VALUE_INITIAL_COUNTER_NUMBER);

  constructor() {
    setInterval(() => {
      /**
       * Al desactivar el Zone.js, esto no funcionará puesto que no es un "Signal"
       */
      this.counter += VALUE_ADD_NUMBER;

      /**
       * Al desactivar el Zone.js, esto funcionará igualmente puesto que es un "Signal"
       */
      this.counterSignal.update(currentValue => currentValue + VALUE_ADD_NUMBER);

      /**
       * Así mismo, si dejamos descomentada la línea de incremento para el "Signal",
       * el campo que no es "Signal", funcionará pese a que el Zone.js está desactivado.
       * Sin embargo, en el momento que se comente el "Signal", el otro campo dejará
       * de incrementarse ya que Angular no es capaz de reconocer el cambio automático.
       *
       * En resumen: el campo "Signal", al ser capaz de cambiar pese a que Zone.js está
       * desactivado, alerta a Angular de que se producen cambios en el componente, lo que
       * devuelve la reactividad automática a todos aquellos campos que sean o no "Signals"
       */
    }, 1000);
  }

  increasesBy(value: number): void {
    this.counter += value;
    this.counterSignal.update(currentValue => currentValue + value);
  }

  resetCounter(): void {
    this.counter = VALUE_INITIAL_COUNTER_NUMBER;
    this.counterSignal.set(ZERO_NUMBER);
  }
}
