import { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenerico } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { ImgPictureConFade } from "../../recursos/componentesGenericos/ImgPicture";
import { ContextoGeneral } from "../../recursos/ContextoGeneral";

const ContenedorMusica = styled(ContenedorGenerico)`
    width: 100%;
    padding: 20px;
`;

const ContenedorGaleria = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-content: center;
    padding: 20px;
    width: 100%;
    max-width: 1200px;
    
    
    flex-direction: column;
    gap: 20px;
`;

const ContendorVertical = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 10px;
`
const ContenedorImg = styled.div`
    width: 100%;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: flex;
    }
`

export const SeccionGaleria = ({ galeria }) => {
    const {setModalSeleccionado, setBoolModalGeneral} = useContext(ContextoGeneral)
    const columna1 = [];
    const columna2 = [];
    const handleClick = (imagen) => {
        setModalSeleccionado(imagen);
        setBoolModalGeneral(true);
    };
    galeria.forEach((imagen, index) => {
        if (index % 2 === 0) {
            columna1.push(
                <ContenedorImg key={index} onClick={() => handleClick(imagen)}>
                    <ImgPictureConFade src={imagen} alt={`Imagen Galeria ${index + 1}`} />
                </ContenedorImg>
            );
        } else {
            columna2.push(
                <ContenedorImg key={index} onClick={() => handleClick(imagen)}>
                    <ImgPictureConFade src={imagen} alt={`Imagen Galeria ${index + 1}`} />
                </ContenedorImg>
            );
        }
    });

    return (
        <ContenedorMusica>
            <TxtGenerico size='var(--txtSize1)' fontFamily='var(--fuenteElegante)'>Fotos</TxtGenerico>
            <ContenedorGaleria>
                <ContendorVertical>
                    {columna1}
                </ContendorVertical>
                <ContendorVertical>
                    {columna2}
                </ContendorVertical>
            </ContenedorGaleria>
        </ContenedorMusica>
    );
};