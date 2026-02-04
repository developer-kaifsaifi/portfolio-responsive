import  { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";



export default function Contact() {

const [iname,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
  const formRef = useRef();
const SubmitHandler = (e) => {


e.preventDefault();



  

  const templateParams = {

    from_name: iname,
    message: message,
    time: new Date().toLocaleString(),
  };

 emailjs
      .sendForm("service_1trsv65", 'template_usugcdw', formRef.current, {
        publicKey: 'Q9lGXAK6ML190h-Pt',
      })
      .then(
        () => {
         toast.success("Message sent successfully ",{style: {
              backgroundColor : "#1A1A1A",
              color: "#ffffff"
            }});;
        setName("");
       setEmail("");
       setMessage("");
        },).catch(
        (err) => {
          console.log(err);
          
          toast.error("Message failed", {
            style: {
              backgroundColor : "#1A1A1A"
            }
          });;
        },
      );

  //  emailjs.send(
  //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //     templateParams,
  //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  //   )
  //   .then(() => {
  //     alert("Email sent successfully 🚀");
  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     alert("Email failed ❌");
  //   });
};



  return (
    <>
    <div className='w-full flex flex-col items-center justify-start  h-[120vh] bg-[#000000]'>
         <div className="w-min-[70vw]  px-50 text-center relative h-50 text-[72px] outfit text-[#9C9C9C] flex flex-col   items-center justify-start pt-20 font-semibold  ">
          {" "}
          <h3 className="outfit  text-white text-[44px]">
           Contact
          </h3>
          <h4 className="text-[18px] font-light text-[#9C9C9C]  outfit">
            hit me if up if you have any questions
          </h4> {" "}
        </div>
 <div className="w-min-[50vw]  px-30 text-center relative h-full text-[14px] outfit text-[#ffffff] flex flex-col   items-center justify-start pt-20 font-semibold  ">
    <form ref={formRef} onSubmit={SubmitHandler} action="">
       <div className=' flex flex-col mb-10 items-start'><label htmlFor="name-field">Name</label>
        <input name='name' required onChange={(e) =>{
          setName(e.target.value)
          }

          }
          value={iname}
          id="name-field"
          
          
          className='focus:outline-none w-180 border rounded-md px-2 py-3.5 border-[#53515B] h-10 mt-3' type="text"  /></div> 
        <div className='flex flex-col mb-10 items-start'><label htmlFor="email-field">Email</label>
        <input name='email' 
        required
        onChange={(e) =>{
          setEmail(e.target.value)
          }
          }
          id="email-field"
          value={email} className='focus:outline-none w-180 border rounded-md px-2 py-3.5 border-[#53515B] h-10 mt-3' type="email"  /></div> 
        <div className='flex flex-col mb-10 items-start'><label htmlFor="text-field">Message</label>
        <textarea
        name='message'
        required 
        onChange={(e) =>{
          setMessage(e.target.value)
          }

          }
id="text-field"

          value={message}  className='focus:outline-none
           resize-none w-180 border rounded-md px-2 py-3.5 border-[#53515B] h-40 mt-3'  ></textarea></div>
        <div className='flex flex-col mb-10 items-start'>
        <button type='submit' className=' pointer flex items-center justify-center bg-[#18181B] hover:bg-[#262628] resize-none w-180 border rounded-md px-2 py-3.5 border-[#53515B] h-10 mt-3' id="namefeild" >Let's talk!</button></div> 


    </form>
 </div>

    </div>
    
    
    </>
  )
}
