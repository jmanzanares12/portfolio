import SocialButton from "../shared/SocialButton";
import { getIconByName } from "../shared/IconMapper";
import { socialLinks } from '../utils/socalLinks';

const FooterApp = () => {
    return (
        <footer className="flex flex-col gap-4 items-center justify-center py-8 px-4 bg-[var(--footer-bg-color)] text-[var(--text-color)] shadow-md">
            <h2 className="text-base sm:text-lg font-semibold">Jorge Manzanares</h2>
            <p className="text-xs sm:text-sm text-[var(--muted-text-color)]">Desarrollador web front-end</p>
            <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map(({iconName, link, name, className}) => (
                    <SocialButton 
                        key={name}
                        icon={getIconByName(iconName)} 
                        link={link} 
                        name={name} 
                        className={className} />
                ))}
            </div>
            <p className="text-xs text-[var(--muted-text-color)]">
                © {new Date().getFullYear()} Jorge Manzanares. Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default FooterApp