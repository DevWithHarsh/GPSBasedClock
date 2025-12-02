import React, { useState } from "react";

export default function Singin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      // Hook into your auth provider here (Firebase / API / NextAuth, etc.)
      console.log("Sign in:", form);
      alert("Signed in (demo). Check console for form data.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* LEFT: Sign-in form */}
        <div className="p-10 md:p-12 lg:p-14">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Welcome Back</h2>
            <p className="mt-2 text-sm text-slate-500">Sign in to access your dashboard and manage your commute.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="text-xs font-medium text-slate-600">Email Address</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l-4 2V6l4 2m0 0l8-4v12l-8-4z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${errors.email ? "border-red-300" : "border-slate-200"}`}
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                </div>
                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="text-xs font-medium text-slate-600">Password</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
                    </svg>
                  </div>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    className={`w-full rounded-lg border px-4 py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 transition ${errors.password ? "border-red-300" : "border-slate-200"}`}
                    placeholder="••••••••"
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-500 px-2 py-1 rounded"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <p id="password-error" className="mt-1 text-xs text-red-500">{errors.password}</p>}
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-400"
                  />
                  Remember me
                </label>

                <a href="#forgot" className="text-sky-600 hover:underline">Forgot Password?</a>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-white text-sm font-semibold shadow-md hover:scale-[.997] active:scale-[.995] transition"
                >
                  Sign In
                </button>
              </div>

              <p className="text-center text-xs text-slate-400">Don't have an account? <a href="#signup" className="text-sky-600 font-medium">Create account</a></p>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-slate-400">Or continue with</span>
                </div>
              </div>

              {/* Social buttons */}
              <div className="flex gap-3 mt-2">
                <button type="button" className="flex-1 inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:shadow-sm">
                  {/* Google icon (svg) */}
                  <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M533.5 278.4c0-18.4-1.6-36.1-4.6-53.4H272v101h147.4c-6.4 34.4-25 63.5-53.2 83.3v69.1h85.9c50.4-46.4 81.4-115 81.4-200z" fill="#4285F4"/>
                    <path d="M272 544.3c73.8 0 135.8-24.5 181.1-66.6l-85.9-69.1c-23.9 16.1-54.4 25.6-95.2 25.6-73 0-134.9-49.2-157.1-115.2H27.7v72.4C72.9 482.6 165.3 544.3 272 544.3z" fill="#34A853"/>
                    <path d="M114.9 327.1c-10.9-32.5-10.9-67.7 0-100.2V154.5H27.7c-40.9 81.3-40.9 177.3 0 258.6l87.2-85.9z" fill="#FBBC05"/>
                    <path d="M272 107.7c39.8 0 75.6 13.7 103.8 40.7l77.9-77.9C407.8 24.8 345.8 0 272 0 165.3 0 72.9 61.7 27.7 154.5l87.2 72.4C137.1 157 199 107.7 272 107.7z" fill="#EA4335"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button type="button" className="flex-1 inline-flex items-center justify-center gap-3 rounded-lg border border-slate-200 px-4 py-2 text-sm hover:shadow-sm">
                  {/* Apple icon */}
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                    <path d="M16.365 1.43c-.86.05-1.94.58-2.56 1.32-.55.66-1.04 1.83-.86 2.91 1.02.08 2.06-.53 2.68-1.29.58-.7 1.04-1.85.74-2.94zM12 6.5c-1.03 0-2.04.57-2.63 1.5-.6.93-.59 2.06.04 2.97.58.86 1.6 1.42 2.59 1.42.06 0 .12 0 .18-.01 1.17-.06 2.29-.84 2.96-1.7.67-.86.92-1.86.85-2.46-.08-.65-.58-1.4-1.15-1.9C14.94 7.1 13.51 6.5 12 6.5z" />
                    <path d="M18.2 12.2c-.06-.1-.13-.22-.2-.31-.59-.83-1.6-1.54-2.76-1.58-1.21-.03-2.06.62-2.96.62s-1.75-.6-2.98-.58c-1.42.02-2.68.87-3.4 2.14C4.1 14.36 4 16.11 4.8 17.62c.64 1.22 1.87 2.46 3.33 2.48.99.01 1.36-.62 2.9-.62 1.54 0 1.98.62 2.98.6 1.47-.02 2.5-1.22 3.14-2.45.55-1 .77-2.32.57-3.5-.2-1.2-.94-1.96-1.9-2.53z" />
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              <p className="mt-4 text-xs text-slate-400">By continuing, you agree to our <a href="#terms" className="underline">Terms</a> and <a href="#privacy" className="underline">Privacy Policy</a>.</p>
            </form>
          </div>
        </div>

        {/* RIGHT: Promo gradient panel (desktop) */}
        <div className="hidden md:flex flex-col justify-center p-10 md:p-12 lg:p-14 bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 flex items-center gap-3">
              

              <div className="bg-white/12 p-3 rounded-lg">
                <svg className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a4 4 0 100-8 4 4 0 000 8zM6 20a6 6 0 0112 0" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-semibold">Join the smart commute revolution.</h3>
            <p className="mt-3 text-slate-100/90">GPS-triggered wakeups • Real-time traffic alerts • Multi-device sync</p>

            

            <div className="mt-8 flex items-center justify-end">
              <div className="bg-white/6 rounded-lg p-3">
                <svg className="h-6 w-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21s8-4.5 8-10.5S16.5 2 12 2 4 6 4 10.5 12 21 12 21z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* small-screen promo (below form) */}
        <div className="md:hidden bg-gradient-to-br from-sky-500 to-indigo-600 text-white p-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold">Join the smart commute revolution.</h3>
            <p className="mt-2 text-sm text-slate-100/90">GPS-triggered wakeups, real-time traffic alerts, and multi-device sync — all in one app.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
