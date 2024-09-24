import HtmlIcon from '../../assets/images/html.png';  
import CssIcon from '../../assets/images/css.png';    
import JsIcon from '../../assets/images/js.png';      
import ReactIcon from '../../assets/images/react.svg';
import NodeIcon from '../../assets/images/node.svg'
import BootstrapIcon from '../../assets/images/bootstrap.png'
import CIcon from '../../assets/images/c.svg'
import ScssIcon from '../../assets/images/sass.png'
import TailwindIcon from '../../assets/images/tailwind.svg'

export function Skill() {
  const skills = [
    { name: 'React', icon: ReactIcon },
    { name: 'JavaScript', icon: JsIcon },
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'Tailwind', icon: TailwindIcon},
    { name: 'Bootstrap', icon: BootstrapIcon },
    {name: 'Sass', icon: ScssIcon},
    { name: 'Node', icon: NodeIcon },
    {name: 'C', icon: CIcon}

    // Add more skills as needed
  ];


  return (
    <section>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative w-32 h-32 flex items-center justify-center bg-slate-600 rounded-full transform hover:scale-110 transition-transform duration-300"
              style={{
                clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
              }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

