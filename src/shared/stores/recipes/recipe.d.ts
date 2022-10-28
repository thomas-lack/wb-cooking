import type { Ingredient } from './ingredient';

export interface Recipe {
  id: string;
  name: string;
  image?: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  lactoseFree?: boolean;
  timeInMinutes?: number;
  calories?: number;
  portions?: number;
  userSelectedPortions?: number;
  
  ingredients: Ingredient[];
  preparationSteps: string[];
}
