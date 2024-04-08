export interface ISponsorContribution{
    sponsorId: number;
    email: string;
    amount: number;
    confirmed: boolean;
    clientSecret: string;
    paymentIntentId: string;
}