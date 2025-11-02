import React from 'react'
import { ButtonData } from '../App'
import { Code } from 'lucide-react';

interface ButtonCardProps {
    button:ButtonData;
    onClick: () => void;
}

const ButtonCard = ({button, onClick}:ButtonCardProps) => {
  return (
    <div className='group relative bg-[#F6F0DF] rounded-xl border border-[#DED4B2] hover:border-[#FF9800] hover:shadow-lg transition-all overflow-hidden '>
      <div className='p-8 flex flex-col items-center justify-center gap-4 min-h-[180px]'>
            {button.component}
      </div>
      <div className='p-4 border-t border-[#EAE2C8] bg-[#F6F0DF]'>
        <div className='flex items-center justify-between'>
            <h3 className='text-slate-800'>
                {button.name}
            </h3>
            <button
                onClick={onClick}
                className="p-2 text-[#FF9800] hover-bg-blue-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                title='View Code'
                >
                    <Code className="w-6 h-6"/>
            </button>
        </div>
      </div>
      {/* Click overlay */}
      <button
        onClick={onClick}
        className='absolute inset-0 bg-transparent cursor-pointer'
        aria-label={`View code for ${button.name}`}
        >
      </button>
    </div>
  )
}

export default ButtonCard
