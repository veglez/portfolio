import React from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  Box,
  Button,
} from '@material-ui/core';
import Styles from '../styles/pages/home.module.scss';
import robotic from '../assets/images/free-robot.jpg';
import IA from '../assets/images/artificial-intelligence.png';
import adn from '../assets/images/adn2.jpg';
import me from '../assets/images/avatar.jpg';
import tesis from '../assets/tesis.pdf';
import cv from '../assets/veglez_CV.pdf';
import microna from '../assets/microna.webp';
import ListOfIcons from '../components/ListOfIcons/ListOfIcons';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import AnimatedScrollDownIcon from '../components/AnimatedScrollDownIcon/AnimatedScrollDownIcon';
import Diploma from '../components/Diploma/Diploma';
import { Link } from 'react-router-dom';
import Cylindrical from '../components/CylindricalText';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'stealblue',
  },
  header: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    background: '#232a2d',
    color: 'white',
    textAlign: 'center',
    paddingBlockEnd: 64,
  },
  presentation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10vw',
  },
  imageContainer: {
    // maxWidth: 320,
  },
  imagen: {
    width: '100%',
    maxWidth: 320,
    height: 320,
    objectFit: 'cover',
    objectPosition: '25% 50%',
    borderRadius: '50%',
  },
  seeMore: {
    position: 'absolute',
    bottom: 40,
  },
  aboutMe: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'justify',
    alignItems: 'center',
    gap: theme.spacing(3),
    padding: theme.spacing(3, 0),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Cylindrical /> */}
      <Grid container justify='center' className={classes.container}>
        <Grid item xs={12} className={classes.header}>
          <Box className={classes.presentation}>
            <div role='presentation' className={classes.imageContainer}>
              <img
                className={classes.imagen}
                src={me}
                alt={'Valent??n eduardo Gonz??lez Morales'}
                title={'Valent??n eduardo Gonz??lez Morales'}
              />
            </div>
            <Box>
              <Typography variant='h5' component='p'>
                ??Hola!, mi nombre es{' '}
              </Typography>
              <Typography variant='h5' component='h1'>
                <strong>Valent??n Eduardo Gonz??lez Morales</strong>
              </Typography>
              <Typography>Yo soy</Typography>
              <AnimatedText />
              <Typography>Te doy la bienvenida a mi p??gina web</Typography>
            </Box>
          </Box>
          <AnimatedScrollDownIcon className={classes.seeMore} />
        </Grid>
        <Grid item xs={11} lg={10} className={classes.aboutMe}>
          <Typography
            id='about-me'
            variant='h4'
            component='h2'
            align='center'
          >
            Acerca de m??
          </Typography>
          <Typography>
            Nac?? el 14 de Octubre de 1994, actualmente resido en el puerto
            de Veracruz, en M??xico. Estudi?? ingenier??a mecatr??nica porque
            desde peque??o me ha llamado la atenci??n la tecnolog??a, me
            fascina lo que puede lograrse con las m??quinas, sin duda son
            una forma de mejorar la calidad de vida; durante mis estudios
            universitarios, la Dra. Andrea Guadalupe Mart??nez L??pez me dio
            la oportunidad de participar en cursos que se llevaron a cabo
            en el departamento de investigaci??n en micro y nanotecnolog??a
            (MICRONA) la cual se encontraba en la facultad en la que
            estudiaba, ahi pude asimilar el ambiente en el mundo de la
            investigaci??n, realmente fue una experiencia muy grata. Fue
            donde aprend?? mas a profundidad sobre electr??nica,
            espec??ficamente sobre f??sica de semiconductores.
          </Typography>
          <Diploma
            itemN={{
              diploma: microna,
              title: 'introducc??n a la f??sica de semiconductores',
            }}
          />
          <Typography>
            Fui avanzando en mis estudios universitarios y llegu?? al mundo
            de la programaci??n en python e introducci??n a la inteligencia
            artificial; en mi primer a??o hab??a tomado cursos en
            programaci??n en C pero fue python el que me sedujo al mundo de
            la programaci??n, me cautiv?? la abstracci??n de ese lenguaje de
            alto nivel que permit??a realizar proyectos de reconocimiento
            facial o ??rboles de decisiones de forma muy sencilla.
            Actualmente utilizo python para realizar actividades como
            optimizaciones imagenes, creaci??n de hojas de c??lculo,
            manipulaci??n de archivos; si veo que hay alguna actividad que
            pueda acortarse u optimizarse con un script en python, lo hago;
            las m??quinas est??n para evitar que realicemos de manera
            repetitiva nuestras actividades.
          </Typography>
          <Typography>
            El mundo de la ingenier??a en general, la ciencia y
            principalmente la tecnolog??a siempre me ha fascinado as?? en que
            la recta final de mis estudios, llegada la hora de hacer mi
            tesis el Dr. Rogelio de Jes??s L??pez Portillo me orient?? en el
            tema de mi tesis: "Simulaci??n de robot de rehabilitaci??n con
            controlador de impedancia variable". Mi enfoque principal fue a
            la programaci??n, se basa principalmente en controlar la
            impedancia de un robot de rehabilitaci??n para extremidades
            superiores a trav??s de un algoritmo de decisi??n binaria llamado{' '}
            <Typography
              variant='subtitle1'
              color='textSecondary'
              component='span'
            >
              Win-stay Lose-Switch
            </Typography>
            . Emula el comportamiento del humano cuando se enfrenta a una
            tarea de decisi??n forzada entre 2 decisiones.{' '}
            <Button
              variant='outlined'
              color='primary'
              component={'a'}
              href={tesis}
            >
              Puedes leer mi tesis aqu??
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={11} lg={10}>
          <Typography
            id='technologies'
            variant='h4'
            component='h2'
            align='center'
          >
            Tecnolog??as
          </Typography>
          <Typography align='justify'>
            Al enfocarme mas en la programaci??n y ver la increible
            evoluci??n de la web solo pude verlo como una oporturnidad de
            hacer que los algoritmos pudieran vivir en la nube y ser
            accesibles desde cualquier dispositivo; con acceso a internet
            se puede tener a la mano cualquier herramienta que uno desee.
            Por tal motivo considero al desarrollo web una herramienta muy
            importante, y frontend es el primer paso, es el medio por el
            cual nos podemos comunicar con todas estas herramientas. Pero
            esto va mas all??, al inicio uno ten??a que programar para
            diferentes plataformas y se ten??a que invertir demasiado tiempo
            y dinero en encontrar una forma de encontrar uniformidad entre
            plataformas, pero cada vez avanza mas el desarrollo web al
            punto de tener PWA's, lo que trae ventajas similares a una
            aplicaci??n nativa, sin duda el desarrollo web tiene un gran
            futuro por delante.Asi que para entrar a todo este mundo decid??
            enfocarme en el mundo del frontend (el cual considero mas
            complicado porque vengo mas de hacer algoritmos para el
            backend).
          </Typography>
          <Typography>
            Dentro de las herramientas que he utilizado y s?? trabajar se
            encuentran las siguientes:
          </Typography>
          <ListOfIcons />
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
