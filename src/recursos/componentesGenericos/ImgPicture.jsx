import styled from "styled-components";

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

