import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]); // Se activa cuando cambia la ruta

    return null; // No renderiza nada
};

export default ScrollToTop;
