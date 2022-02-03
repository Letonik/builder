import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createPage} from "./redux/actions/pageAction";
import Card from 'react-bootstrap/Card';
import {Col, Container, Row, Form, Button, Table} from "react-bootstrap";
import style from './Templates.module.scss'

const Templates = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [active, setActive] = useState('61fbf3209b74a7b05b7791a3')
  const dispatch = useDispatch();
  const {pageStore} = useSelector((state) => state);
  const {pages} = pageStore;
  const {lang} = useParams()

  const changeActive = (event) => {
    setActive(event.target.id)
  }

  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    createPage(name)(dispatch);
  };

  return (


    <div className={style.tamplates}>
      <div className={style.createBlock}>
        <form id="create-page">
          <h5>
            Create Template
          </h5>
          <input
            type="text"
            className={`form-control form-control-sm ${
              isValid ? "" : "is-invalid"
            }`}
            id="name"
            name="name"
            placeholder="Name of Template"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!isValid && (
            <div className="invalid-feedback">
              Please provide a valid name.
            </div>
          )}
         <div className={style.buttons}>
           <button
             type="button"
             className="btn btn-secondary btn-sm"
             data-bs-dismiss="modal"
           >
             Clear
           </button>

           <button
             type="button"
             className="btn btn-primary btn-sm"
             onClick={handleSubmit}
           >
             Save
           </button>
         </div>
        </form>
      </div>
      <div className={style.table} onChange={changeActive}>
        <Table responsive="sm" borderless>
          <thead className={style.head}>
          <tr>
            <th>Active</th>
            <th>ID</th>
            <th>Name</th>
            <th>Setting</th>
          </tr>
          </thead>
          <tbody>
          {pages
            ? pages.map((page) => (
              <tr key={page._id} className={active == page._id && style.active}>
                <td>
                  <Form.Check
                    type="radio"
                    name="group2"
                    id={page._id}
                    checked={active == page._id}
                  />
                </td>
                <td>
                  {page._id}
                </td>
                <td>
                  {page.name}
                </td>
                <td>
                  <Link to={`/editor/${lang}/${page._id}`}><Button variant="outline-primary"><i
                    className="fa fa-pencil"></i></Button></Link>{' '}
                  <Button variant="outline-secondary"><i className="fa fa-trash"></i></Button>
                </td>
              </tr>
            ))
            : "No Page"}
          </tbody>
        </Table>
      </div>
    </div>


  );
};

export default Templates;
