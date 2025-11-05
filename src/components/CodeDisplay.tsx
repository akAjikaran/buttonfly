import React, { useState } from 'react'
import { ButtonData } from '../App'
import { X, Copy, Check } from 'lucide-react';


interface CodeDisplayProps {
    button: ButtonData;
    onClose: () => void
}

const CodeDisplay = ({ button, onClose }: CodeDisplayProps) => {
    const [activeTap, setActiveTap] = useState<'tailwind' | 'css'>('tailwind');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const code = activeTap === 'tailwind' ? button.tailwindCode : button.cssCode;

        //Fall back method using textarea for copying
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        } finally {
            document.body.removeChild(textarea);
        }
    };
    return (
        <div className='fixed inset-0 bg-[black/50] backdrop-blur-sm z-50 flex items-center justify-center p-4 '>
            <div className='border border-black bg-[#FDF9EE] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col '>

                {/* Header */}
                <div className='p-6 border-b border-slate-200 flex items-center justify-between'>
                    <div>
                        <h2 className='text-slate-900'>{button.name}</h2>
                        <p className='text-slate-600 text-sm'>{button.category}Button</p>
                    </div>
                    <button
                        onClick={onClose}
                        className='p-2 hover:bg-slate-100 rounded-lg transition-colors'
                    >
                        <X className="w-5 h-5 text-slate-600" />
                    </button>
                </div>

                {/* Preview */}
                <div className='p-8 border-b border-slate-200 bg-[#FDF9EE] flex items-center justify-center'>
                    {button.component}
                </div>

                {/* Tabs */}
                <div className='border-b border-slate-200 bg-[#FDF9EE]'>
                    <div className='flex gap-1 p-2'>
                        <button
                            onClick={() => setActiveTap('tailwind')}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTap === 'tailwind'
                                ? 'bg-white text-[#FF9800] shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                                } `}
                        >
                            Tailwind CSS
                        </button>
                        <button
                            onClick={() => setActiveTap('css')}
                            className={`px-4 py-2 rounded-lg text-sm transition-colors ${activeTap === 'css'
                                ? 'bg-white text-[#FF9800] shadow-md'
                                : 'text-slate-600 hover:text-slate-900'
                                }`}
                        >
                            Pure CSS
                        </button>
                    </div>
                </div>

                {/* Code */}
                <div className='flex-1 overflow-auto p-6 bg-slate-900'>
                    <div className='relative'>
                        <button
                            onClick={handleCopy}
                            className='absolute top-4 right-2 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2 text-white text-sm'
                        >
                            {copied ? (
                                <>
                                    <Check className='w-4 h-4' />
                                    Copied
                                </>
                            ) : (
                                <>
                                    <Copy className='w-4 h-4' />
                                    Copy
                                </>
                            )}
                        </button>
                        <pre className='text-sm text-slate-200 overflow-auto'>
                            <code>{activeTap === 'tailwind' ? button.tailwindCode : button.cssCode}</code>
                        </pre>
                    </div>
                </div>

                {/* Footer */}
                <div className=' my-8 px-6 flex justify-between items-center'>
                    <p className='text-slate-600'>Copy the code and paste it into your project</p>
                    <button
                        onClick={onClose}
                        className='py-2 px-4 border border-[#FF9800] rounded-md text-md hover:bg-[#FF9800]'
                    >Close</button>
                </div>
            </div>
        </div>
    )
}

export default CodeDisplay
