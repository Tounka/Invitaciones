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

export const TxtGenericoStyled = styled.p`
    user-select: none;
    font-size: ${props => props.size ? props.size : 'var(--txtSize3)'};
    text-align: ${props => props.aling ? props.aling : 'center'};
    color: ${props => props.color ? props.color : ''};
    cursor: ${props => props.pointer ? 'pointer' : ''};
    font-weight: ${props => props.bold ? 'bold' : ''};
    font-family: ${props => props.fontFamily ? props.fontFamily : 'var(--fuenteRegular)'};
    margin: 0;
    opacity: 0; /* Comienza transparente */
    ${props => props.isVisible && css`
        animation: ${slideUp} 1s ease-out forwards;
    `}
`;

export const TxtGenerico = ({ children, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                        observer.disconnect(); 
                    }, 200); 
                }
            });
        }, {
            threshold: .4 
        });
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    
        return () => observer.disconnect(); 
    }, []);

    return (
        <TxtGenericoStyled ref={ref} isVisible={isVisible} {...props}>
            {children}
        </TxtGenericoStyled>
    );
};



export const TxtTitularGenericoH1 = styled.h1`
    user-select: none;
    text-align: ${props => props.aling ? props.aling : 'center'};
    font-size: ${props => props.size ? props.size : '14px'};
    color: ${props => props.color ? props.color : ''};
    cursor: ${props => props.pointer ? 'pointer' : ''};
    font-weight: ${props => props.bold ? 'bold' : ''};
    margin: 0;
    font-family: ${props => props.fontFamily ? props.fontFamily : 'var(--fuenteEspecial)'};
` 