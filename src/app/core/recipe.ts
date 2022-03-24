export interface Recipe {
  id: number,
  imagePath?: string,
  name: string,
  ingredients?: Ingredient[],
  instructions?: string[],
  category: Category,
  tags: string[],
  description?: string
}

export interface Ingredient {
  name: string,
  quantity: number,
  unit: string,
}

export enum Category {
  breakfast,
  lunch,
  dinner,
}
