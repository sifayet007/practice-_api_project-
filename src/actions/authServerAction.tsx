// "use server";

// import { cookies } from "next/headers";

// interface loginData {
//     username: string;
//     password: string;
// }

// export const loginServerAction = async (loginData: loginData) => {
//     try {
//         const res = await fetch("https://fakestoreapi.com/auth/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(loginData),
//         });

//         if (!res.ok) {
//             throw new Error("Invalid username or password");
//         }

//         const data = await res.json();
//         const token = data.token;

//         if (res.ok) {
//             (await cookies()).set("accessToken", token)
//         }

//         return { success: true, data };
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// };


// export async function logOutServerActon() {
//     (await cookies()).set("accessToken", "");
// }
"use server"

import { cookies } from "next/headers";

interface loginData {
    username: string,
    password: string
}
const loginServerAction = async (loginData: loginData) => {
    try {
        const res = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData)
        });
        if (!res.ok) {
            throw new Error("Invalid username or password")
        }
        const data = await res.json()
        const token = data.token
        if (res.ok) {
            ((await cookies()).set('accessToken', token))
        }
        return { success: true, data }
    } catch (error) {
        throw error
    }
}
export default loginServerAction
export async function logOutServerAction() {
    ((await cookies()).set('accessToken', ''))
}