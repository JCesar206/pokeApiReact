import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return(
        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
            <div className='flex justify-center gap-6 items-center mb-2'>
            <a href="https://github.com/JCesar206" target="_blank" className="hover:text-cyan-400">
                <FaGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/jcesar206" target="_blank" className="hover:text-blue-400">
                <FaLinkedin size={20}/>
            </a>
            <a href="mailto:jcesar206@hotmail.com" className="hover:text-pink-400">
                <FaEnvelope size={20}/>
            </a>
            </div>
            <p className='text-sm text-gray-400'>
                &copy; {new Date().getFullYear()} Pokédex JulyDevops. Todos los derechos reservados.
            </p>
        </footer>
    );
}

export default Footer;