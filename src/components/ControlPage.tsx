"use client"

import { Download } from "lucide-react";

const ControlPage:React.FC = async() => {

  const handlePrint = ()=>{
    // Set the print media type to 'print'
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        // Set the paper size to tabloid (11x17 inches)
        var style = document.createElement('style');
        style.innerHTML = '@page { size: tabloid; }';
        document.head.appendChild(style);
      }
    });

    // Trigger the print dialog
    window.print();    
  }

  return (
    <section className="hidden md:flex">
            <button onClick={handlePrint} className='flex flex-row gap-2 bg-secondaryPale text-white absolute   rounded-md top-4 right-4 px-4 py-4 text-sm   '>
                <div className="">
                    Save as a pdf
                </div>
                <Download className='animate-bounce'/>
            </button>
    </section> 
  )
}

export default ControlPage