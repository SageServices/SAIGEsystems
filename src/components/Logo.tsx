import React from 'react';
import { Hexagon } from 'lucide-react';

const Logo = ({ className = 'h-8 w-8' }) => {
  return (
    <div className={`relative ${className} animate-spin-slow`}>
      <Hexagon className="text-emerald-500 w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/3 h-2/3 bg-emerald-400 rounded-full opacity-50 blur-sm" />
      </div>
    </div>
  );
};

export default Logo;