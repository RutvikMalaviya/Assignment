import React from 'react'

function Footer() {
  return (
    <>
     <div className="absolute w-[1340px] h-52 left-[130px] top-[5769px] bg-blue-300">
        <ul className='flex justify-around font-extrabold pt-10'>
          <li>Social
              <img className="relative right-[30px] top-5"  src="src/assets/Facebook 1.png" alt="" />
              <li className="font-extralight">Facebook</li>
              <img className="relative right-[30px] top-[19px]" src="src/assets/Linkedin 1.png" alt="" />
              <li className="font-extralight">Linkedin</li>
              <img className="relative right-[30px] top-5" src="src/assets/Google 1.png" alt="" />
              <li className="font-extralight">Google</li> 
          </li>
          <li>Explore
            <li className="font-extralight pt-2.5">Service
            </li>
            <li className="font-extralight pt-2.5">Team</li>
            <li className="font-extralight pt-2.5">Client</li>
          </li>
          
          <li>Contact
          <li className="font-extralight pt-2.5">Lorem Ipsum dummy address
            </li>
            <li className="font-extralight pt-2.5">used for display</li>
            <li className="font-extralight pt-2.5 ">1234567890</li>
          </li>
          <li>Email
            <li className="font-extralight pt-2.5">mendlesoncommunication@email.com</li>
          </li>
        </ul>
      </div>

      <div className="absolute text-sm font-normal leading-[16.59px] w-[346px] h-[17px] pb-[30px] left-[627px] top-[5999px] font-Rubik">© Copyright 2018 Mendleson Communication Pty Ltd</div>
      </>
  )
}

export default Footer