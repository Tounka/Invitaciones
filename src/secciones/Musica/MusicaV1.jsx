import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { FaPlay, FaPause } from "react-icons/fa";
import cancion from '../../../src/recursos/img/CancionEspecial.mp3';

const ContenedorMusica = styled(ContenedorGenericoSmall)`
    width: 100%;
    
`;

const ContenedorReproductor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 400px;
    max-width: 80%;
    height: 80%;
    border-radius: 20px;
    
    border: solid 4px var(--cafePrincipal);
    flex-direction: column;
    gap: 20px;
`;

const ContenedorBtnPlay = styled.div`
    font-size: 28px;
    border-radius: 50%;
    height: 50px;
    width:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cafePrincipal);
    flex-shrink: 1;
    svg {
        cursor: pointer;
        
        color: white;
    }
`;

export const SeccionReproductor = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(cancion));

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audioElement = audioRef.current;

        // Event listener para actualizar el estado cuando el audio termine
        const handleAudioEnded = () => {
            setIsPlaying(false);
        };

        audioElement.addEventListener('ended', handleAudioEnded);

        return () => {
            audioElement.removeEventListener('ended', handleAudioEnded);
        };
    }, []);

    return (
        <ContenedorMusica>
            <ContenedorReproductor>
                <TxtGenerico size='var(--txtSize2)'>Escucha nuestra canción favorita</TxtGenerico>
                <TxtGenerico size='var(--txtSize5)' fontFamily='var(--fuenteElegante)' >'Joaquin Sabina - Contigo'</TxtGenerico>
                <ContenedorBtnPlay onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </ContenedorBtnPlay>
            </ContenedorReproductor>
        </ContenedorMusica>
    );
};
