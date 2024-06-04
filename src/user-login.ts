export interface User {
    id: number;
    username: string;
    password: string;
}

export const Users: User[] = [
    {
        id: 1,
        username: "superadmin",
        password: "qwerty@123"
    },
    {
        id: 2,
        username: "admin_it",
        password: "qwerty@123"
    },
    {
        id: 3,
        username: "admin_marketing",
        password: "qwerty@123"
    }
]