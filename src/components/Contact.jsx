import React from 'react'

export default function Contact() {
  return (
    <>
    <div className='w-full h-[120vh] bg-g'>
         <div className="w-min-[70vw]  px-50 text-center relative h-full top-6 text-[72px] outfit text-[#9C9C9C] flex flex-col   items-center justify-center font-semibold  ">
          {" "}
          <h3 className="outfit  text-white text-[44px]">
           Contact
          </h3>
          <h4 className="text-[18px] font-light text-[#9C9C9C] mt-5 outfit">
            hit me if up if you have any questions
          </h4> {" "}
        </div>
 <div>
    <form action="">
       <span><label htmlFor="namefeild">Name</label>
        <input type="text"  id="namefeild" /></span> 
        <span><label htmlFor="namefeild">Email</label>
        <input type="email"  id="namefeild" /></span> 
        <span><label htmlFor="namefeild">Name</label>
        <textarea id="namefeild" ></textarea></span> 


    </form>
 </div>

    </div>
    
    
    </>
  )
}
