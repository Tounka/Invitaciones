
import './App.css';
import styled from 'styled-components';
import { TimerGenerico } from './secciones/Timer/TimerGenerico';
import { SeccionUbicacionGenerico } from './secciones/Ubicacion/UbicacionGenerico';
import { SeccionBienvenida } from './secciones/Bienvenida/BienvenidaV1';
import { data } from './Data';
import { SeccionReproductor } from './secciones/Musica/MusicaV1';
import { TimerV2 } from './secciones/Timer/TimerV2';
import { CodigoVestimenta } from './secciones/CodigoVestimenta/CodigoVestimenta';
import { SeccionRegalo } from './secciones/Regalo/SeccionRegalo';
import { SeccionFrase } from './secciones/Frase/SeccionFrase';
import { SeccionFraseGenerica } from './secciones/Frase/SeccionFraseGenerica';

import imgUbicacion from '../src/recursos/img/LasMaravilllasPark.jpeg'
import imgTimer from '../src/recursos/img/imgTimer.jpg'
import { SeccionGaleria } from './secciones/Galeria/Galeria';

const ContenedorPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  
`
function App() {
  return (
    <ContenedorPrincipal className="App">

        <SeccionBienvenida />
        <SeccionReproductor />
        <SeccionUbicacionGenerico 
          img = {imgUbicacion}
          ubicacion = {data.ubicacion}
          iframe={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.5457671808845!2d-106.48414222408215!3d23.295949106069997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1407b222954ff015%3A0x8f0acee5a893b301!2sTrailer%20Park%20Maravillas!5e0!3m2!1ses-419!2smx!4v1731726524171!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          }
       />
        <CodigoVestimenta />
       <TimerV2 fecha = {data.fecha} imgTimer={imgTimer}  />
       <SeccionRegalo />
       <SeccionGaleria galeria = {data.galeria} />
       <SeccionFrase />
       
    </ContenedorPrincipal>
  );
}

export default App;
