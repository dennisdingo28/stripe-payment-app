export interface CustomButtonProps {
    title: string;
    classes: string;
    disabled?: boolean;
    icon?: string;
    handleClick?: ()=>void;
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
export interface LoggedUser {
    session?: {
        name?: string;
        email?: string;
        id_token?: string ;
        image?: string ;
    }
}
export interface Payment {
    customerId: string;
    eventId: string;
    paid: boolean;
}