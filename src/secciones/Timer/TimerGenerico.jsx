import { useEffect, useState } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";

const ContenedorTimerGenerico = styled(ContenedorGenericoSmall)`
    width: 100%;
`
export const TimerGenerico = ({ fecha = new Date(2025,0,1) }) => {
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
            <TxtGenerico size={'var(--txtSize1)'} bold >{` ${diasRestantes} Días` }</TxtGenerico>
            <TxtGenerico size={'var(--txtSize2)'} bold >{tiempoRestante}</TxtGenerico>
        </ContenedorTimerGenerico>
    );
};