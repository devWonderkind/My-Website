// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';



function Contact() {
  return (
    <section className=''>
    <div className=" p-4 text-center  border border-gray-200 rounded-lg sm:p-8 ">
    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Having troubles? Write to me at <span>akanshachahal758@gmail.com</span> </h5>
    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      OR
    </p>
    <p className="mb-5 text-base text-gray-900 sm:text-lg dark:text-gray-400">
      Connect with me 
    </p>
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
      <a
        href="https://www.linkedin.com/in/aakanksha-chahal"
        className="w-full sm:w-auto  hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      >
      <FontAwesomeIcon icon={faLinkedin}/>
      </a>
      <a
        href="https://github.com/devWonderkind"
        className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      >
        <FontAwesomeIcon icon={faGithub} />
       
      </a>
      <a
        href="https://x.com/devWonderkind"
        className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
      >
       <FontAwesomeIcon icon={faXTwitter} />
       
      </a>
    </div>
  </div>
  </section>
  )
}

export default Contact