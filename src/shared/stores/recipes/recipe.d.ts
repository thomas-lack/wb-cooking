export interface Recipe {
  name: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  lactoseFree?: boolean;
  timeInMinutes?: number;
  calories?: number;
  portions?: number;
  ingredients: [{
    name: string;
    amount?: number;
    unit?: string;
  }];
  preparationSteps: string[];
}
