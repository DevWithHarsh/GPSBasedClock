import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#74B9FF] to-[#1B4DFF] flex items-center justify-center shadow-md">
                            <a href="/"><MapPin className="w-6 h-6 text-white" strokeWidth={2.5} /></a>
                        </div>
                        <a href="/"><span className="text-2xl font-bold text-[#3A3F47]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            WayWake
                        </span></a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="#features"
                            className="text-[#3A3F47] font-medium hover:text-[#2D74FF] transition-colors duration-200"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="text-[#3A3F47] font-medium hover:text-[#2D74FF] transition-colors duration-200"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            How it Works
                        </a>
                        <a
                            href="#stories"
                            className="text-[#3A3F47] font-medium hover:text-[#2D74FF] transition-colors duration-200"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Stories
                        </a>
                        <a
                            href="#pricing"
                            className="text-[#3A3F47] font-medium hover:text-[#2D74FF] transition-colors duration-200"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Pricing
                        </a>
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="/login"><button
                            className="px-6 py-2.5 text-[#2D74FF] font-semibold hover:bg-[#F5F7FA] rounded-xl transition-all duration-200"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                            Login
                        </button>
                        </a>
                        <a href="/signup">
                            <button
                                className="px-6 py-2.5 bg-[#2D74FF] text-white font-semibold rounded-xl hover:bg-[#1B4DFF] shadow-md hover:shadow-lg transition-all duration-200"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                                Get Started
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-[#3A3F47] hover:bg-[#F5F7FA] rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" strokeWidth={2} />
                        ) : (
                            <Menu className="w-6 h-6" strokeWidth={2} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-6 border-t border-[#DCE1E9]">
                        <div className="flex flex-col gap-4">
                            <a
                                href="#features"
                                className="text-[#3A3F47] font-medium hover:text-[#2D74FF] py-2 transition-colors"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-[#3A3F47] font-medium hover:text-[#2D74FF] py-2 transition-colors"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                How it Works
                            </a>
                            <a
                                href="#stories"
                                className="text-[#3A3F47] font-medium hover:text-[#2D74FF] py-2 transition-colors"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Stories
                            </a>
                            <a
                                href="#pricing"
                                className="text-[#3A3F47] font-medium hover:text-[#2D74FF] py-2 transition-colors"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pricing
                            </a>

                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#DCE1E9]">
                                <a href="/login">
                                    <button
                                        className="px-6 py-3 text-[#2D74FF] font-semibold bg-[#F5F7FA] rounded-xl hover:bg-[#DCE1E9] transition-all"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        Login
                                    </button>
                                </a>
                                <a href="/signup">
                                    <button
                                        className="px-6 py-3 bg-[#2D74FF] text-white font-semibold rounded-xl hover:bg-[#1B4DFF] shadow-md transition-all"
                                        style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                        Get Started
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar
