export interface CustomButtonProps {
    title: string;
    classes: string;
    disabled?: boolean;
    icon?: string;
}
export interface PriceCardProductProps{
    active?: boolean;
    name: string;
    description: string;
}
export interface PriceCardAmountProps {
    type?: string;
    unit_amount: number;
}
