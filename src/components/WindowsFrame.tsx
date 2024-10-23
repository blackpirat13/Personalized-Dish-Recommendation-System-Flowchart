import React from 'react';
import { Minus, Square, X } from 'lucide-react';

interface WindowsFrameProps {
  children: React.ReactNode;
  title: string;
}

export const WindowsFrame: React.FC<WindowsFrameProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
        {/* Windows-style title bar */}
        <div className="bg-gradient-to-r from-[#0078D4] to-[#0063B1] px-4 py-2 flex justify-between items-center">
          <h1 className="text-white font-semibold">{title}</h1>
          <div className="flex space-x-2">
            <button className="p-1.5 hover:bg-white/10 rounded">
              <Minus className="w-4 h-4 text-white" />
            </button>
            <button className="p-1.5 hover:bg-white/10 rounded">
              <Square className="w-4 h-4 text-white" />
            </button>
            <button className="p-1.5 hover:bg-red-500 rounded">
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
        
        {/* Content area */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};