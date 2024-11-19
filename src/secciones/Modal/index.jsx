import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ContenidoModalImg } from './ModalImg.jsx';
import { ContextoGeneral } from '../../recursos/ContextoGeneral';

const DisplayFijoStyled = styled.div`
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    
    padding: 30px;
    overflow: auto;
    display: ${props => props.boolModalGeneral ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5); 
`;

const ModalGenerico = ({ children }) => {
    const {setBoolModalGeneral, boolModalGeneral,modalSeleccionado} = useContext(ContextoGeneral);

    const [seccionSeleccionadaModal, setSeccionSeleccionadaModal] = useState();

    useEffect(() =>{
        if(modalSeleccionado ){
            setSeccionSeleccionadaModal(<ContenidoModalImg src={modalSeleccionado} />)
        }
    },[modalSeleccionado]);


    const modalRoot = document.getElementById('modalPrincipal');
    const handleClick = () =>{
        setBoolModalGeneral(false);
    }


 
    return ReactDOM.createPortal(
        <DisplayFijoStyled boolModalGeneral={boolModalGeneral} onClick={() => handleClick()} >
            {seccionSeleccionadaModal}
        </DisplayFijoStyled>,
        modalRoot
    );
};

export default ModalGenerico;
