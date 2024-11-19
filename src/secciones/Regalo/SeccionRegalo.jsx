import styled from "styled-components";
import { TxtGenerico } from "../../recursos/componentesGenericos/TxtGenericos";
import { ContenedorGenericoSmall } from "../../recursos/componentesGenericos/ContenedoresGenericos";
import { FaRegEnvelope } from "react-icons/fa6";

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
    gap: 10px;
`;

const ContenedorHorizontal = styled.div`
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const IconoSobre = styled(FaRegEnvelope)`
    font-size: var(--txtSize2); /* Ajusta el tamaño del ícono */
    vertical-align: middle; /* Alineación vertical */
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
                <TxtGenerico size='var(--txtSize1)' fontFamily='var(--fuenteElegante)'>
                    Regalos
                </TxtGenerico>
    
                <TextoFrase >Agradecemos tu compañía en esta nueva etapa que comenzamos. El regalo es opcional, la asistencia es obligatoria. Pero si quieres tener un detalle con nosotros tendremos lluvia de sobres ✉</TextoFrase>
                
                
            </ContenedorTxt>
        </ContenedorRegalo>
    );
};
