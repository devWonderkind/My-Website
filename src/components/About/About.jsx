// import React from 'react'
import about from '../../assets/images/about.svg'


 
// const experiences = [
//   {
//     role: 'Software Engineer',
//     company: 'Google',
//     duration: 'Jan 2020 - Present',
//     details: [
//       'Worked on Google Maps',
//       'Reduced load times by 50%',
//     ],
//   },
//   {
//     role: 'UI Designer',
//     company: 'Microsoft',
//     duration: 'Jun 2018 - Dec 2019',
//     details: [
//       'Worked on Windows 11',
//       'Designed the control panel',
//     ],
//   },
//   {
//     role: 'SWE Intern',
//     company: 'Netflix',
//     duration: 'Jan 2017 - May 2018',
//     details: [
//       'Worked on component library',
//       'Helped create UI components',
//     ],
//   },
// ];

export const About = () => {
  return (
    // <section className=" text-white py-20">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-4xl font-bold mb-6">About</h2>
    //     <div className="space-y-8">
    //       {experiences.map((experience, index) => (
    //         <div key={index} className="bg-gray-800 p-6 rounded-lg">
    //           <h3 className="text-2xl font-semibold mb-2">{experience.role}</h3>
    //           <p className="text-xl mb-2">{experience.company}</p>
    //           <p className="text-sm mb-4">{experience.duration}</p>
    //           <ul className="list-disc list-inside">
    //             {experience.details.map((detail, i) => (
    //               <li key={i}>{detail}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section>
    <div className="m-24 p-4 bg-slate-800 flex shadow-lg rounded-2xl text-center">
    {/* <h1 className='text-white text-3xl text-center font-bold '>About</h1> */}
    <div className="w-1/3">
    
      <img 
        src={about} 
        alt="About Me" 
        className=""
      />
    </div>

    {/* Right Div: */}
    <div className=" pl-4 mt-8">
      <h1 className="text-4xl font-bold text-white mb-4">Experience</h1> 
      {/* Experience 1 */}
      <div className="m-6 p-4 text-white rounded-[50px] ">

        <li className='text-xl'>Springreeen</li> <span>Octtober 2023 - March 2024</span>
      
        
      </div>
    </div>
    <div className=" pl-4 mt-8">
      <h1 className="text-4xl font-bold text-white mb-4">Experience</h1> 
      {/* Experience 1 */}
      <div className="m-6 p-4 text-white rounded-[50px] ">

        <li className='text-xl'>Springreeen</li> <span>Octtober 2023 - March 2024</span>
      
        
      </div>
    </div>
    
  </div>
  </section>
    )
}
