import menuButton from '../assets/images/menuButton.svg';
import closeMenu from '../assets/images/menuClose.svg';






export function openMenu(hamburgerIcon, responsiveNavigation, menuIsOpen, setMenuIsOpen) {
    setMenuIsOpen(!menuIsOpen);

    if (menuIsOpen) {
        hamburgerIcon.current.src = menuButton; // Wenn das Menü geöffnet ist, ändere das Icon
    } else {
        hamburgerIcon.current.src = closeMenu; // Wenn das Menü geschlossen ist, ändere das Icon
    }

    // Toggle die Klasse 'openResponsiveMenu' für das responsive Menü
    responsiveNavigation.current.classList.toggle('openResponsiveMenu');
}