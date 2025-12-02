import React from 'react';
import { MapPin, Bell, Play, Apple } from 'lucide-react';
import MapImage from "../assets/Map.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <span className="text-blue-600 text-lg">⚡</span>
              <span className="text-blue-600 font-medium text-sm sm:text-base">
                New: Smart Sleep Prediction 2.0
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Never Miss Your</span>
              <br />
              <span className="text-blue-500">Stop Again</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The world's most accurate GPS alarm clock. Sleep peacefully during your commute and wake up exactly when you need to—automatically.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5">
                <Apple className="w-5 h-5" />
                <span>Download App</span>
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-2xl shadow-md transition-all hover:shadow-lg border border-gray-200">
                <Play className="w-5 h-5 text-blue-600" fill="currentColor" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Trusted by <span className="font-semibold">50,000+</span> commuters
              </p>
            </div>
          </div>

          {/* Ultra-Realistic Phone */}
          <div className="relative w-[260px] sm:w-[280px] md:w-[300px] flex justify-center mx-auto lg:justify-end">
            <div className="
    mx-auto 
    rounded-[3rem]
    p-[6px]
    bg-[#0d0d0f]
    shadow-[0_15px_40px_rgba(0,0,0,0.35)]
    border border-[#1a1a1d]
    relative
  ">

              {/* Dynamic Island */}
              <div className="
      absolute top-[10px] left-1/2 -translate-x-1/2 
      w-32 h-8 bg-black rounded-full 
      shadow-[0_4px_10px_rgba(0,0,0,0.35)]
      z-20 flex items-center justify-center gap-2
    ">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <p className="text-white text-[11px] font-medium">GPS Active</p>
              </div>

              {/* Screen */}
              <div className="
      aspect-[9/19.5] 
      overflow-hidden 
      rounded-[2.5rem]
      relative
    ">
                {/* Map Background Image */}
                <img
                  src={MapImage}
                  alt="map"
                  className="w-full h-full object-cover"
                />


                {/* Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-sm">Central Station</h3>
                      <p className="text-gray-500 text-xs">Arriving in 15 min</p>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between text-[11px] text-gray-500">
                    <span>Start</span>
                    <span>Alarm set</span>
                  </div>

                  <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes bell {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(-10deg); }
          20%, 40% { transform: rotate(10deg); }
          50% { transform: rotate(0deg); }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 75%; }
        }

        .animate-bell {
          animation: bell 3s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Home