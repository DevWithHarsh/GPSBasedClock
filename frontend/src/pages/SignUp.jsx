import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  }

  function validate() {
    const errs = {};

    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";

    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Enter a valid email";

    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6)
      errs.password = "Password must be at least 6 characters";

    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      console.log("Signing up:", form);
      alert("Sign up successful (demo). Check console for form data.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-8 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT FORM */}
        <div className="p-10 md:p-12 lg:p-14">
          <div className="max-w-md mx-auto">

            <h2 className="text-3xl font-semibold text-slate-800">Welcome Back</h2>
            <p className="mt-2 text-sm text-slate-500">
              Enter your details to access your dashboard.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">

              {/* FIRST + LAST NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* FIRST NAME */}
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 ${
                      errors.firstName ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                  )}
                </div>

                {/* LAST NAME */}
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-sky-400 ${
                      errors.lastName ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                  )}
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Email Address
                </label>

                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* MAIL ICON — RESTORED */}
                    <svg
                      className="h-4 w-4 text-slate-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12H8m0 0l-4 2V6l4 2m0 0l8-4v12l-8-4z"
                      />
                    </svg>
                  </div>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 pl-10 text-sm focus:ring-2 focus:ring-sky-400 ${
                      errors.email ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div>
                <label className="text-xs font-medium text-slate-600">
                  Password
                </label>

                <div className="mt-1 relative">

                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* LOCK ICON — RESTORED */}
                    <svg
                      className="h-4 w-4 text-slate-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z"
                      />
                    </svg>
                  </div>

                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 pl-10 pr-10 text-sm focus:ring-2 focus:ring-sky-400 ${
                      errors.password ? "border-red-300" : "border-slate-200"
                    }`}
                    placeholder="••••••••"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>

              {/* REMEMBER ME */}
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              {/* SUBMIT */}
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
