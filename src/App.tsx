import './App.css'
import logo from '../public/buttonfly-logo.png'
import mascot from '../public/images/buttonfly-mascot.png'
import { PiCode } from "react-icons/pi";
import ButtonLibrary from './components/ButtonLibrary';
import { useState } from 'react';
import CodeDisplay from './components/CodeDisplay';


export interface ButtonData {
  id: string;
  name: string;
  category: string;
  component: React.ReactNode;
  tailwindCode: string;
  cssCode: string;
}

function App() {
  const [selectedButton, setSelectedButton] = useState<ButtonData | null>(null);

  return (
    <>
      <div className='min-h-screen bg-[#FDF9EE]'>
        {/* Header */}
        <header className='relative top-10 z-10' id='#'>
          <div className='flex justify-center items-center'>
            <img
              src={logo}
              alt="Butterfly"
              height="150px"
              width='150px'
            />
          </div>
        </header>
        {/* Main content */}
        <main className='container mx-auto px-4 py-8'>
          <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center mt-10 gap-5'>
            <div>
              <img
                src={mascot}
                alt="mascot"
                width={200}
                height={200}
                className='md:w-full w-[130px]' />
            </div>

            <div className='text-center'>
              <div className='flex gap-4 items-center justify-center bg-[#F6F0DF] py-1 px-3 w-[340px] mx-auto rounded-full mb-2'>
                <PiCode className='w-6 h-6  text-gray-600   ' />
                <span className=' text-gray-600 text-[18px]'>
                  Click any button to view it's code
                </span>
              </div>
              <p className='text-3xl font-semibold'>
                Explore our collection of button styles. Copy the <b>Tailwind CSS </b> or <b>pure CSS</b> code to use in your projects
              </p>
            </div>
          </div>

          <ButtonLibrary onButtonClick={setSelectedButton} />

        </main>

        {/* Code Display Model */}
        {selectedButton && (
          <CodeDisplay
            button={selectedButton}
            onClose={() => setSelectedButton(null)}
          />
        )}

        {/* Footer */}
        <footer className='border-t border-[#DED4B2] backdrop-blur-sm bg-[#F6F0DF]  mt-16'>
          <div className='container mx-auto px-4 py-8 text-center'>
            {/* <p className='text-[#FF9800]'>Created by
              <a className='text-black text-md font-semibold underline pl-1 hover:text-gray-600' target='_blank' href="https://www.linkedin.com/in/ajikaran-ramesh-8869501a7/">
              ajikaran</a></p> */}
              <p className='text-black'>Click button to copy code
             </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
