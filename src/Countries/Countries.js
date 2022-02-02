import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import style from './Countries.module.scss';
import flag_KZ from '../assets/kz.png'
import flag_RU from '../assets/ru.png'
import flag_WW from '../assets/ww.png'
import flag_US from '../assets/us.png'
import flag_UK from '../assets/uk.png'
import flag_EU from '../assets/eu.png'
import flag_DE from '../assets/de.png'
import check from '../assets/check.png'


const Countries = () => {
  /*  const params = useParams();*/

  const countries = [
    {
      id: 1,
      loc: 'kz',
      name: 'Kazakhstan',
      image: flag_KZ
    },
    {
      id: 2,
      loc: 'ru',
      name: 'Russia',
      image: flag_RU
    },
    {
      id: 3,
      loc: 'de',
      name: 'Deutschland',
      image: flag_DE
    },
    {
      id: 4,
      loc: 'ww',
      name: 'World Wide',
      image: flag_WW
    },
    {
      id: 5,
      loc: 'eu',
      name: 'Europe',
      image: flag_EU
    },
    {
      id: 6,
      loc: 'uk',
      name: 'United Kingdom',
      image: flag_UK
    },
    {
      id: 7,
      loc: 'us',
      name: 'USA',
      image: flag_US
    }
  ]

  return (
    <div className={style.countries}>

      <h2>Сhoose a location</h2>
      {
        countries.map((item, id) =>
          <div key={id} className={style.btn}>
            <Link to={`/editor/${item.loc}`}>
              <div className={style.country}>
                <img src={item.image} alt="flag"/>
                {item.name}
                <img src={check} alt="check" className={style.check}/>
              </div>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Countries;
