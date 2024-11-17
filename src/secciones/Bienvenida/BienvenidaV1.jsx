import { useEffect, useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenerico } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { ContenedorImg } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { ImgPicture } from "../../recursos/componentesGenericos/ImgPicture";

import imgBienvenida from '../../recursos/img/imgPrincipal.jpg';

const ContenedorBg = styled(ContenedorImg)`
    height: 100%;
    
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 600px) {
        
    }
`
const ContenedorBienvenida = styled(ContenedorGenerico)`
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    position: relative;
`
const ContenedorTxtBg = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 20px;
    left: 0;
    text-align: center;
    font-size: var(--txtSize1);
    gap: 20px;
    color: var(--blancoPrincipal);
`
export const TxtBienvenidos = styled(TxtGenerico)`
    
    font-size: var(--txtSize2);
    gap: 10px;
    color: var(--blancoPrincipal);
    @media (max-width: 600px) {
        font-size: var(--txtSize3);
    }

`
export const TxtTitulo = styled(TxtBienvenidos)`
    
    font-size: var(--txtSize1);
  

`
export const SeccionBienvenida = () => {

    return (
        <ContenedorBienvenida>
            <ContenedorBg>
                <ImgPicture src={imgBienvenida} alt='Imagen de bienvenida' />
            </ContenedorBg>
            <ContenedorTxtBg>
            <TxtTitulo > Nuestra Boda </TxtTitulo>
            <TxtBienvenidos> ---- Mara & Iohann ---- </TxtBienvenidos>
            

            </ContenedorTxtBg>
        </ContenedorBienvenida>
    );
};