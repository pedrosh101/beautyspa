import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira nossos serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='img-cards/img-1.jpg'
              title='Reiki'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/reiki'
            />
            <CardItem
              src='img-cards/img-2.jpg'
              title='Acupuntura'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/acupuntura'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img-cards/img-3.jpg'
              title='Quiropraxia'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/quiropraxia'
            />
            <CardItem
              src='img-cards/img-4.jpg'
              title='Massagem Estética'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/massagemestetica'
            />
            <CardItem
              src='img-cards/img-5.jpg'
              title='Drenagem Linfática'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/drenagemlinfatica'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='img-cards/img-6.jpg'
              title='Pós Cirurgico'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/poscirurgico'
            />
            <CardItem
              src='img-cards/img-7.jpg'
              title='Massagens Relaxantes'
              text='Técnica milenar japonesa voltada para a cura'
              label='Spa'
              path='/servicos/massagensrelaxantes'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;