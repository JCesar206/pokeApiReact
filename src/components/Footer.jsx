import { FaGithub, FaLinkedin, FaEnvelope, FaHome } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

function Footer() {
    return(
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
            <div className='flex justify-center gap-6 items-center mb-2'>
            <a href="https://jcesar206.github.io/myPersonalBlog/" target="_blank" className="hover:text-lime-400">
                <FaHome size={20} title="Home Page"/>
            </a>
            <a href="https://github.com/JCesar206" target="_blank" className="hover:text-cyan-400">
                <FaGithub size={20} title="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/jcesar206" target="_blank" className="hover:text-blue-400">
                <FaLinkedin size={20} title="Linkedin"/>
            </a>
            <a href="mailto:jcesar206@hotmail.com" className="hover:text-pink-400">
                <FaEnvelope size={20} title="Hotmail"/>
            </a>
            <a href="mailto:jcesary06@gmail.com" className="hover:text-red-400">
                <SiGmail size={20} title="Gmail"/>
            </a>
            </div>
            <p className='text-sm text-gray-400'>
                &copy; {new Date().getFullYear()} Pokédex JulyDevops. Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default Footer;