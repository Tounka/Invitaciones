import { useEffect, useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall, ContenedorImg } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { ImgPicture } from "../../recursos/componentesGenericos/ImgPicture";


const ContenedorTimerGenerico = styled(ContenedorGenericoSmall)`
    width: 100%;
    height: 400px;
    position: relative;

`
const ContenedorImgBg = styled(ContenedorImg)`
    position: absolute;
    top: 0;
    left:0;
`

const ContenedorTxt = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items:center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left:0;

    padding-top: 60px;
`
const TxtTimer = styled(TxtGenerico)`
    color: white;
    text-shadow: 2px 3px 28px rgb(0, 0, 0);

    width: auto;
    padding: 0 10px  ;
`
export const TimerV2 = ({ fecha = new Date(2025,0,1), imgTimer }) => {
    const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());
    const [diasRestantes, setDiasRestantes] = useState(calcularDiasRestantes());

    function calcularTiempoRestante() {
        const ahora = new Date();
        const diferencia = new Date(fecha) - ahora;

        if (diferencia <= 0) {
            return "00:00:00";
        }

        const horas = String(Math.floor((diferencia / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutos = String(Math.floor((diferencia / (1000 * 60)) % 60)).padStart(2, '0');
        const segundos = String(Math.floor((diferencia / 1000) % 60)).padStart(2, '0');

        return `${horas}:${minutos}:${segundos}`;
    }

    function calcularDiasRestantes() {
        const ahora = new Date();
        const diferencia = new Date(fecha) - ahora;

        if (diferencia <= 0) {
            return 0;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        return dias;
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTiempoRestante(calcularTiempoRestante());
            setDiasRestantes(calcularDiasRestantes());
        }, 1000);

        return () => clearInterval(intervalo);
    }, [fecha]);

    return (
        <ContenedorTimerGenerico>
            <ContenedorImgBg height='100%'>
                <ImgPicture src={imgTimer} alt='Imagen Timer'/>
            </ContenedorImgBg>
            <ContenedorTxt>
                <TxtTimer size={'var(--txtSize1)'} bold >{`Faltan` }</TxtTimer>
                <TxtTimer size={'var(--txtSize1)'} bold >{` ${diasRestantes} Días` }</TxtTimer>
                <TxtTimer size={'var(--txtSize2)'} bold >{tiempoRestante}</TxtTimer>
            </ContenedorTxt>
        </ContenedorTimerGenerico>
    );
};