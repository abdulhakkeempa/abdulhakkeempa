import Link from 'next/link'
import Heading from '../../components/Titles/Heading'

export default function About() {
  const skills = {
    'programming_languages' : ["Python", "C", "C++", "JavaScript", "Java", "PHP", "R", "Rust"],
    'libraries' : ["Django", "Django REST", "FastAPI", "Laravel", "jQuery", "Pandas", "NumPy", "Scikit-Learn", "OpenCV", "Socket.io", "Matplotlib", "Node.js", "JWT (JSON Web Tokens)", "Flask", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    'database' : ["PostgreSQL", "MongoDB", "MySQL"],
    'cloud_tools' : ["Microsoft Azure", "Google Cloud", "Vercel", "Nginx", "Docker", "GitHub Actions"]
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl lg:px-30 p-10 pb-5 pt-0 md:pr-20 md:pl-20">
        <p className="text-base text-slate-400 font-normal mt-2 md:text-justify leading-relaxed">
          I am a <span className="font-semibold text-slate-200">full-stack developer</span> interested in solving real-world problems using technology. This interest led me to <span className="font-semibold text-slate-200">product engineering</span>. Seeing the potential of artificial intelligence, I am also interested in <span className="font-semibold text-slate-200">Artificial Intelligence and Machine Learning</span>. I am always interested in building <span className="font-semibold text-slate-200">SaaS products</span> which solve complex real-world problems. I currently have <span className="font-semibold text-slate-200">1.5 years of experience</span> in building web applications and am extending my knowledge over <span className="font-semibold text-slate-200">Artificial Intelligence and Deep Learning</span>.
          <br></br>
          <br></br>
          At <span className="font-semibold text-slate-200">Centrric Innovations Pvt Ltd</span>, I spent 6 months <span className="font-semibold text-slate-200">researching new product features</span>, <span className="font-semibold text-slate-200">documenting technical aspects</span>, <span className="font-semibold text-slate-200">proposing application architectures</span>, and <span className="font-semibold text-slate-200">designing complex applications</span>. I have also assisted numerous brands/companies in building their product and website as a <span className="font-semibold text-slate-200">freelance developer</span>.
          <br></br>
          <br></br>
          I am interested in working under an <span className="font-semibold text-slate-200">early-stage startup</span> where people are working together to solve great problems. I am greatly into <span className="font-semibold text-slate-200">tech communities</span> and have been involved in multiple communities in Kerala. Currently, I am a member of the executive committee of <Link href="https://gdg.community.dev/gdg-cloud-kochi/" target="_blank" className="font-semibold text-slate-200 hover:underline  hover:underline-offset-4 transition-colors duration-200">Google Developer Groups Cloud Kochi</Link>, where I am involved in planning and executing events such as DevFest, Cloud Community, etc. I would also like to host great technical events. Besides, I have delivered <span className="font-semibold text-slate-200">10+ talks & workshops</span> on various technical topics at different colleges.
          <br></br>
          <br></br>
          I am currently <span className="font-semibold text-slate-200">open to job opportunities</span> in the field of full-stack development, product engineering, and AI/ML. If you are interested in contacting me for any kind of services, please mail me at <Link href="mailto:abdulhakkeempa2002@gmail.com" className="hover:text-white hover:underline  hover:underline-offset-4 transition-colors duration-200">abdulhakkeempa2002@gmail.com </Link> .
        </p>


        <div className="my-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">
              <Link href="/docs/resume.pdf" target='_blank'>Download Resume</Link>
          </button>
        </div>

      </div>
      <Heading title="Things I have worked with" text_size="text-lg" container_spacing='p-10 pb-3 pt-2 md:pr-20 md:pl-20' />
      {Object.keys(skills).map((key) => (
        <div key={key}>
          <Heading title={key.replace('_', ' ')} text_size="text-sm capitalize" container_spacing='p-10 pb-2 pt-2 md:pr-20 md:pl-20'/>
          <div className='mx-auto max-w-screen-xl lg:px-30 p-10 pb-2 pt-0 md:pr-20 md:pl-20'>
              <div className='flex flex-wrap gap-x-2 gap-y-1'>
                  {skills[key].map((skill) => (
                      <span key={skill} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2 cursor-pointer">{skill}</span>
                  ))}
              </div>
          </div>
        </div>
      ))}

    </div>

  )
}