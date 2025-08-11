"use client";
import loginServerAction from "@/actions/authServerAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";


export default function LoginCard() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const route = useRouter()


    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setError("");
    //     setLoading(true);

    //     try {
    //         const response = await loginServerAction({ username, password });
    //         console.log(response)
    //         toast.success("Login success");

    //         if (response.success) {
    //             route.push('/user')
    //         }
    //     } catch (err: any) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            const response = await loginServerAction({ username, password })
            if (response.success) {
                route.push('/user')
                toast.success("Login success");
            }
        } catch (error: any) {
            setError(error.message)

        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}

                className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold text-center mb-5">Login</h2>

                {error && <p className="text-red-500 mb-3">{error}</p>}


                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter your username"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
