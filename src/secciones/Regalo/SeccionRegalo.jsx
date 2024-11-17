import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { FaRegEnvelope } from "react-icons/fa6";

const ContenedorRegalo = styled(ContenedorGenericoSmall)`
    width: 100%;
`;

const ContenedorTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 400px;
    max-width: 80%;
    height: 80%;
    border-radius: 20px;
    border: solid 4px var(--doradoSuave);
    flex-direction: column;
    gap: 20px;
`;

const ContenedorHorizontal = styled.div`
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const IconoSobre = styled(FaRegEnvelope)`
    font-size: var(--txtSize2); /* Ajusta el tamaño del ícono */
    vertical-align: middle; /* Alineación vertical */
`;

export const SeccionRegalo = () => {
    return (
        <ContenedorRegalo>
            <ContenedorTxt>
                <TxtGenerico size='var(--txtSize1)' fontFamily='var(--fuenteElegante)'>
                    Regalos
                </TxtGenerico>
                <ContenedorHorizontal>
                    <TxtGenerico size='var(--txtSize3)'>Fiesta de sobres</TxtGenerico>
                    
                </ContenedorHorizontal>
                <TxtGenerico size='var(--txtSize4)'> <IconoSobre  /></TxtGenerico>
                
            </ContenedorTxt>
        </ContenedorRegalo>
    );
};
