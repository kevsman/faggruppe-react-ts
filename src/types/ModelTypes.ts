export interface UserProfile {
    id: number;
    name: string;
    stocks: Stock[];
}

export interface Stock {
    id: number;
    name: string;
    value: number;
    previousValue: number;
}