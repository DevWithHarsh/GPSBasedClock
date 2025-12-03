import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

export default function Signup() {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const { setUser } = React.useContext(UserDataContext);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    }

    function validate() {
        const errs = {};

        if (!form.firstname.trim()) errs.firstname = "First name is required";
        if (!form.lastname.trim()) errs.lastname = "Last name is required";

        if (!form.email.trim()) errs.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(form.email))
            errs.email = "Enter a valid email";

        if (!form.password) errs.password = "Password is required";
        else if (form.password.length < 6)
            errs.password = "Password must be at least 6 characters";

        return errs;
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password } = form;

        const newUser = {
            fullname: {
                firstname,
                lastname,
            },
            email,
            password,
        };

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/register`,
                newUser
            );

            if (response.status === 201) {
                const data = response.data;
                setUser(data.user);
                localStorage.setItem("token", data.token);
                navigate("/dashboardHome");
            }

            setForm({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                remember: false,
            });
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-8 px-4">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="p-10 md:p-12 lg:p-14">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-3xl font-semibold text-slate-800">Welcome Back</h2>
                        <p className="mt-2 text-sm text-slate-500">
                            Enter your details to access your dashboard.
                        </p>

                        <form onSubmit={submitHandler} className="mt-8 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-medium text-slate-600">
                                        First Name
                                    </label>
                                    <input
                                        name="firstname"
                                        value={form.firstname}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 ${errors.firstname ? "border-red-300" : "border-slate-200"
                                            }`}
                                        placeholder="John"
                                    />
                                    {errors.firstname && (
                                        <p className="mt-1 text-xs text-red-500">{errors.firstname}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-slate-600">
                                        Last Name
                                    </label>
                                    <input
                                        name="lastname"
                                        value={form.lastname}
                                        onChange={handleChange}
                                        className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 ${errors.lastname ? "border-red-300" : "border-slate-200"
                                            }`}
                                        placeholder="Doe"
                                    />
                                    {errors.lastname && (
                                        <p className="mt-1 text-xs text-red-500">{errors.lastname}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-medium text-slate-600">
                                    Email Address
                                </label>
                                <input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 ${errors.email ? "border-red-300" : "border-slate-200"
                                        }`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="text-xs font-medium text-slate-600">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={form.password}
                                    onChange={handleChange}
                                    className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 ${errors.password ? "border-red-300" : "border-slate-200"
                                        }`}
                                    placeholder="••••••••"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-white font-semibold"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                {/* RIGHT: Promo gradient panel */}
                <div className="hidden md:flex flex-col justify-center p-10 md:p-12 lg:p-14 bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
                    <div className="max-w-sm mx-auto">
                        <div className="mb-6 flex items-center gap-3">

                            <div className="bg-white/12 p-3 rounded-lg">
                                {/* person icon */}
                                <svg className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a4 4 0 100-8 4 4 0 000 8zM6 20a6 6 0 0112 0" />
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold">Never miss your stop again.</h3>
                        <p className="mt-3 text-slate-100/90">Log in to sync your routes, customize alarms, and track your travel history seamlessly.</p>

                        <div className="mt-8 flex items-center justify-end">
                            <div className="bg-white/6 rounded-lg p-3">
                                {/* location icon */}
                                <svg className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21s8-4.5 8-10.5S16.5 2 12 2 4 6 4 10.5 12 21 12 21z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* small-screen promo: visible under md */}
                <div className="md:hidden bg-gradient-to-br from-sky-500 to-indigo-600 text-white p-6">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold">Never miss your stop again.</h3>
                        <p className="mt-2 text-sm text-slate-100/90">Log in to sync your routes, customize alarms, and track your travel history seamlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}