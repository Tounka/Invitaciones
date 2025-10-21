import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { FaRegEnvelope } from "react-icons/fa6";
import { data } from "../../Data";
import { BtnConfirmar } from "../../recursos/componentesGenericos/BtnGenerico";

const ContenedorRegalo = styled(ContenedorGenericoSmall)`
    width: 100%;
    height: auto;
    padding: 20px 0; 
`;

const ContenedorTxt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-width: 300px;
    max-width: 80%;
    max-height: 80%;
    border-radius: 20px;
    border: solid 4px var(--cafePrincipal);
    flex-direction: column;
    gap: 20px;
    
`;

const TextoFrase = styled(TxtGenerico)`
    font-size: var(--txtSize3);

    @media (max-width: 500px) {
        font-size: var(--txtSize4);
    }
`
export const SeccionRegalo = () => {
    return (
        <ContenedorRegalo>
            <ContenedorTxt>
                <TxtGenerico style={{ color: "var(--colorTexto)" }} size='var(--txtSize1)' fontFamily='var(--fuenteElegante)'>
                    Regalos
                </TxtGenerico>

                <TextoFrase style={{ color: "var(--colorTexto)" }} >{data.msgRegalo}</TextoFrase>

                <BtnConfirmar href={`/`} target="_blank" rel="noopener noreferrer">
                    Ver Mesa De Regalos
                </BtnConfirmar>
            </ContenedorTxt>
        </ContenedorRegalo>
    );
};
