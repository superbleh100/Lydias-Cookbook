export interface MenuItem {
    recipe: string;
}

export interface Day {
    items: MenuItem[],
    date: Date,
}

