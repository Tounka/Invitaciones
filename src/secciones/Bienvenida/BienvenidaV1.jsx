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
    color: black;
`
export const TxtBienvenidos = styled(TxtGenerico)`

    font-size: var(--txtSize1);
    gap: 10px;
    color: black;
    
    font-family: var(--fuenteElegante);
    @media (max-width: 600px) {
        font-size: var(--txtSize1);
    }

`
export const TxtFecha = styled(TxtGenerico)`
    font-family: var(--fuenteExpecialLustria);
    font-size: var(--txtSize2);
    gap: 10px;
    color: black;
    @media (max-width: 600px) {
        font-size: var(--txtSize3);
    }

`
export const TxtTitulo = styled(TxtBienvenidos)`
    font-family: var(--fuenteExpecialLustria);
    @media (min-width: 800px) {
        font-size: 40px;
    }
    font-size: 36px;
  

`
export const SeccionBienvenida = ({fecha}) => {
  
        const dia = fecha.getDate();
        const opcionesMes = { month: 'long' };
        let mes = new Intl.DateTimeFormat('es-ES', opcionesMes).format(fecha);
        const año = fecha.getFullYear();

        mes = mes.charAt(0).toUpperCase() + mes.slice(1);


        const fechaEnPalabras = `${dia} ${mes} ${año}`;
    return (
        <ContenedorBienvenida>
            <ContenedorBg>
                <ImgPicture src={imgBienvenida} alt='Imagen de bienvenida' />
            </ContenedorBg>
            <ContenedorTxtBg>
            <TxtTitulo > Nuestra Boda </TxtTitulo>
            <TxtBienvenidos>Mara & Iohannan </TxtBienvenidos>
            <TxtFecha> 0{fechaEnPalabras} </TxtFecha>
            

            </ContenedorTxtBg>
        </ContenedorBienvenida>
    );
};