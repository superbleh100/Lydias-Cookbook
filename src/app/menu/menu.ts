export interface MenuItem {
    recipe: string;
    id: number;
}

export interface Day {
    items: MenuItem[],
    date: Date,
}

