import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>Beauty Spa</h1>
      <p>Venha conhecer nosso espaço</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Massagens Terapêuticas
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Cabelos <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;