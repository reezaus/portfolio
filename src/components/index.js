import React from 'react';
import Header from './Header2';
import Particles from 'react-particles-js/';
import { makeStyles } from '@material-ui/styles';
import PortfolioMini from './PortfolioMini';
const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
    opacity: '0.3',
    zIndex: 0,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className="benis" style={{ zIndex: 7 }}>
        <span
          className="animated bounce"
          style={{ zIndex: 6, backgroundColor: 'transparent' }}
        >
          <div
            onClick={() =>
              window.scrollTo({
                top: window.screen.height - 180,
                behavior: 'smooth',
              })
            }
            style={{
              transform: 'translate(-50%, -50%)',
              zIndex: '59',
              height: '50px',
              width: '50px',
              position: 'relative',
            }}
          >
            &nbsp;
          </div>
        </span>
      </div>
      <div className="home">
        <Header />
        <div
          className="clip"
          style={{
            bottom: '-40vh',
            position: 'absolute',
            backgroundColor: '#E5E5E5',
            height: '40vh',
            width: '100vw',
            zIndex: 0,
            borderBottom: '120px #E5E5E5 solid',
            marginBottom: '-1px',
          }}
        >
        </div>
        <PortfolioMini />
        <Particles
          canvasClassName={classes.particlesCanva}
          params={{
            particles: {
              number: {
                value: 45,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 1,
                  color: 'tomato',
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: true,
                  speed: 6,
                  size_min: 0.1,
                  sync: true,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: true,
                },
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Home;
