import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createPage} from "./redux/actions/pageAction";
import Card from 'react-bootstrap/Card';
import {Col, Container, Row, Form, Button} from "react-bootstrap";

const Templates = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);
  const dispatch = useDispatch();
  const [active, setActive] = useState('')

  const changeActive = (event) => {
    setActive(event.target.id)
  }

  const {pageStore} = useSelector((state) => state);
  const {pages} = pageStore;
  const {lang} = useParams()

  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false);
      return;
    }
    createPage(name)(dispatch);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <form id="create-page">
            <div className="modal-header">
              <h5 className="modal-title" id="addPageModalLabel">
                Create Page
              </h5>
            </div>
            <div className="modal-body">
              <div className="col-auto">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    isValid ? "" : "is-invalid"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Name of Page"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className="invalid-feedback">
                    Please provide a valid name.
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger btn-sm"
                data-bs-dismiss="modal"
              >
                Clear
              </button>
              <button
                type="button"
                className="btn btn-info btn-sm"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>

        <Container>
          <Form onChange={changeActive}>
            <Row className='my-5'>
              {pages
                ? pages.map((page) => (
                  <Col xs={4} key={page._id}>
                    <Card
                      border="info"
                      className="mb-4"
                    >
                      <Card.Header
                        style={{background: '#0dc4e8', color: 'white'}}
                      >
                        <Form.Check
                          type="radio"
                          label={page._id}
                          name="group2"
                          id={page._id}
                        />
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>{page.name}</Card.Title>
                        <Card.Text>
                          <Link to={`/editor/${lang}/${page._id}`}><Button variant="outline-info"><i className="fa fa-pencil"></i></Button></Link>{' '}
                          <Button variant="outline-danger"><i className="fa fa-trash"></i></Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
                : "No Page"}
            </Row>
          </Form>
        </Container>


        {/*<div className="col-12 my-2">
          <table className="table table-bordered table-hover">
            <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Slug</td>
              <td>Action</td>
            </tr>
            </thead>
            <tbody>
            {pages
              ? pages.map((page) => (
                <tr key={page._id}>
                  <td>{page._id}</td>
                  <td>{page.name}</td>
                  <td>{page.slug}</td>
                  <td>
                    <Link to={`/editor/${lang}/${page._id}`}>Edit</Link>
                  </td>
                </tr>
              ))
              : "No Page"}
            </tbody>
          </table>
        </div>*/}
      </div>
    </div>
  );
};

export default Templates;
