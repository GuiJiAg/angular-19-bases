export class Constants {
  /* GENERICS */
  public EMPTY_TEXT: string = '';
  public ZERO_NUMBER: number = 0;
  public ONE_NUMBER: number = 1;
  public BOOLEAN_TRUE: boolean = true;
  public BOOLEAN_FALSE: boolean = false;

  /* TITLES */
  public MAIN_TITLE: string = 'Bases de Angular';

  /* COUNTER STAFF */
  public BUTTON_ADD_TEXT: string = 'Aumentar';
  public BUTTON_SUBSTRAC_TEXT: string = 'Desaumentar';
  public BUTTON_RESET_COUNTER_TEXT: string = 'Restaurar contador';
  public VALUE_ADD_NUMBER: number = 1;
  public VALUE_SUBSTRAC_NUMBER: number = -1;
  public VALUE_INITIAL_COUNTER_NUMBER: number = 10;

  /* HEROES STAFF */
  public HERO_NAME_TEXT: string = 'Nombre:';
  public HERO_AGE_TEXT: string = 'Edad:';
  public HERO_METHOD_TEXT: string = 'Método:';
  public HERO_CAPITALIZED_TEXT: string = 'Capitalizado:';
  public HERO_CHANGE_NAME_BUTTON_TEXT: string = 'Cambiar nombre';
  public HERO_CHANGE_AGE_BUTTON_TEXT: string = 'Cambiar edad';
  public HERO_RESET_BUTTON_TEXT: string = 'Reiniciar botones';
  public HERO_CHANGE_NAME_EXAMPLE_VALUE: string = 'Ironman';
  public HERO_CHANGE_AGE_EXAMPLE_VALUE: number = 45;
  public HERO_CHANGE_NAME_EXAMPLE2_VALUE: string = 'Spiderman';
  public HERO_CHANGE_AGE_EXAMPLE2_VALUE: number = 22;
  public HEROES_LIST_TITLE_TEXT: string = 'Listado de héroes';
  public HERO_DELETE_BUTTON_TEXT: string = 'Borrar último héroe';
  public HEROES_RESET_BUTTON_TEXT: string = 'Reiniciar lista';
  public HERO_DELETED_TEXT: string = 'Último héroe borrado:';
  public HERO_NOT_DELETED: string = 'No hay héroes borrados';
  public HEROES_LIST_EXAMPLE_VALUES: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk'];

  /* DBZ STAFF */
  public DBZ_MAIN_PAGE_TITLE_TEXT: string = 'Main DBZ Page';
  public DBZ_MAIN_PAGE_SUBTITLE_TEXT: string = 'DBZ Personajes';
  public DBZ_MAIN_PAGE_LIST_TITLE_TEXT: string = 'Listado:';
  public DBZ_MAIN_PAGE_FIRST_HERO_NAME: string = 'Goku';
  public DBZ_MAIN_PAGE_FIRST_HERO_POWER: number = 10000;
  public DBZ_MAIN_PAGE_SECOND_HERO_NAME: string = 'Krillin';
  public DBZ_MAIN_PAGE_SECOND_HERO_POWER: number = 500;
  public DBZ_MAIN_PAGE_THIRD_HERO_NAME: string = 'Piccolo';
  public DBZ_MAIN_PAGE_THIRD_HERO_POWER: number = 5000;
  public DBZ_MAIN_PAGE_FOURTH_HERO_NAME: string = 'Vegeta';
  public DBZ_MAIN_PAGE_FOURTH_HERO_POWER: number = 9800;
  public DBZ_MAIN_PAGE_FORM_TITLE_TEXT: string = 'Agregar Personaje:';
  public DBZ_MAIN_PAGE_ADD_BUTTON_TEXT: string = 'Agregar';
  public DBZ_HEROES_LIST_EVEN_HERO_CLASS_LIST: string = 'list-group-item-primary';
  public DBZ_HEROES_LIST_DELETE_HERO_SYMBOL: string = 'X';
  public DBZ_ADD_FORM_INPUT_HERO_NAME_NAME: string = 'Nombre';
  public DBZ_ADD_FORM_INPUT_HERO_POWER_NAME: string = 'Poder';
  public DBZ_ADD_FORM_INPUT_HERO_NAME_PLACEHOLDER: string = 'Nombre';
  public DBZ_ADD_FORM_INPUT_HERO_POWER_PLACEHOLDER: number = this.ZERO_NUMBER;
  public DBZ_ADD_FORM_INPUT_HERO_NAME_INIT_VALUE: string = this.EMPTY_TEXT;
  public DBZ_ADD_FORM_INPUT_HERO_POWER_INIT_VALUE: number = this.ZERO_NUMBER;

  constructor() {}
}
