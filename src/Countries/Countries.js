import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import style from './Countries.module.scss';


const Countries = () => {
/*  const params = useParams();*/

  const countries = [
    {
      id: 1,
      loc: 'kz',
      name: 'Kazakhstan'
    },
    {
      id: 2,
      loc: 'ru',
      name: 'Russia'
    },
    {
      id: 3,
      loc: 'de',
      name: 'Deutschland'
    },
    {
      id: 4,
      loc: 'ww',
      name: 'World Wide'
    },
    {
      id: 5,
      loc: 'eu',
      name: 'Europe'
    },
    {
      id: 6,
      loc: 'uk',
      name: 'United Kingdom'
    },
    {
      id: 7,
      loc: 'us',
      name: 'USA'
    }
  ]

  return (
    <div className={style.countries}>
      <h2>Сhoose a location</h2>
      {
        countries.map((item, id) =>
          <div key={id} className={style.btn}>
            <Link to={`/editor/${item.loc}`}>
              <Button variant="outline-danger" size="lg">
                {item.name}
              </Button>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Countries;
