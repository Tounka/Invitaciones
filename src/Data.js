import img1 from './recursos/img/GaleriaImg/Galeria1.jpg';
import img2 from './recursos/img/GaleriaImg/Galeria2.jpg';
import img3 from './recursos/img/GaleriaImg/Galeria3.jpg';
import img4 from './recursos/img/GaleriaImg/Galeria4.jpg';
import img5 from './recursos/img/GaleriaImg/Galeria5.jpg';
import img6 from './recursos/img/GaleriaImg/Galeria6.jpg';
import img7 from './recursos/img/GaleriaImg/Galeria7.jpg';
import img8 from './recursos/img/GaleriaImg/Galeria8.jpg';
import img9 from './recursos/img/GaleriaImg/Galeria9.jpg';
import cancion from './recursos/img/CancionEspecial.mp3';

export const data = {
    tipoEvento: 'Nuestra Boda',
    nombres: ['Fátima Márquez', 'Octavio Aceves'],

    textoConfirmarAsistencia:"Con amor y gratitud, queremos compartir con ustedes el día en que uniremos nuestras vidas. Con cariño, les pedimos que esta celebración sea solo para adultos",
    fecha: new Date(2026, 3, 21),
    galeria: [img1, img2, img3, img4, img5, img6, img7, img8, img9],
    msgRegalo: "Agradecemos tu compañía en esta nueva etapa que comenzamos. El regalo es opcional, la asistencia es obligatoria. Pero si quieres tener un detalle con nosotros tendremos lluvia de sobres ✉",
    msgCodigoVestimenta: "Formal, Blanco reservado para la novia y verde esmeralda reservado para las damas",
    coloresReservados: ["#046307", "#fff"],

    nombreUbicacion:"Hacienda De Eventos Cachas De Oro",
    ubicacion: 'Calle, Oro Grande 1600, 45580 San Pedro Tlaquepaque, Jal.',
    ubicacionMaps: [
        "https://maps.app.goo.gl/tyeouXAoKzRFFWRH6"
    ],
    horaEventoUbicacion:"19:30",
    nombreCancion:"Morat - A Dónde Vamos",
    cancion: cancion,
    telefono:"3319904978"

}