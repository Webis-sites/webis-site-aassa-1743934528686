'use client';

import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  onScheduleClick?: () => void;
}

export default function HeroSection({ onScheduleClick }: HeroSectionProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="מספרה מודרנית"
          layout="fill"
          objectFit="cover"
          priority
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8 text-right">
        <div className="max-w-3xl mx-auto text-center" dir="rtl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg font-serif">
            מספרה מוביל בישראל
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-10 text-white/90 drop-shadow-md font-light">
            חווית לקוח מושלמת בכל ביקור
          </p>
          <button
            onClick={onScheduleClick}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            קבע תור עכשיו
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-secondary/20 rounded-full -mr-12 -mt-12 blur-xl z-10"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-full -ml-16 -mb-16 blur-xl z-10"></div>
    </div>
  );
}