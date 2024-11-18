import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const Picture = styled.picture`
    height: 100%;
    width: 100%;
    object-fit: cover;

    position: ${props => props.bg ? 'absolute' : ''};
    top: ${props => props.bg ? '0' : ''};
    left: ${props => props.bg ? '0' : ''};
    z-index: ${props => props.bg ? '1' : ''};
    
    
`
export const ImgPicture = ({ src, alt, fn, bg }) => {

    return src ? (
            <Picture bg={bg} >
                <source srcSet={`${src}`} type="image/webp" />
                <source srcSet={`${src}`} type="image/jpeg" />
                <img src={`${src}`} alt={alt} loading="lazy"/>
            </Picture>
    
    ) : null;
};



export const ImgPictureConFade = ({ src, alt, fn, bg }) => {
    const [isVisible, setIsVisible] = useState(false);  // Estado para manejar visibilidad
    const ref = useRef(null);  // Referencia para el observer

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                 
                    setTimeout(() => {
                        setIsVisible(true);
                        observer.disconnect(); 
                    }, 50);
                }
            });
        }, {
            threshold: .4,
            rootMargin: "50px 0px"
        });
    
        if (ref.current) {
            observer.observe(ref.current); 
        }
    
        return () => observer.disconnect(); // Limpiar al desmontar
    }, []);

    return src ? (
        <Picture ref={ref} bg={bg}>
            <source srcSet={`${src}`} type="image/webp" />
            <source srcSet={`${src}`} type="image/jpeg" />
            <img 
                src={`${src}`} 
                alt={alt} 
                loading="lazy" 
                style={{
                    opacity: isVisible ? 1 : 0, // Cambiar opacidad cuando sea visible
                    transition: 'opacity 1s ease-out' // Transición suave
                }}
            />
        </Picture>
    ) : null;
};