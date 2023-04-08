export interface IUser {
    id: number;
    username: string;
    email: string;
    isAdmin: boolean;
    birthdate?: Date;
    address?: string;
};

export const USERS_MOCK: IUser[] = [
    { 
        id: 1001, 
        isAdmin: false, 
        birthdate: new Date(2006, 0, 22), 
        username: "vovka", 
        email: "gugugu123@gmail.com", 
        address: "Kyiv, Ukraine" 
    },
    { id: 1002, isAdmin: true, username: "liza33", email: "blabla@gmail.com", address: "Rivne, Ukraine" },
    { id: 1003, isAdmin: false, username: "vladtymo", email: "wladnaz@ukr.net", address: "Rivne, Ukraine" },
    { id: 1004, isAdmin: false, birthdate: new Date(1995, 5, 1),  username: "igoriii", email: "bibik@yahoo.com" },
]