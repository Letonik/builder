import React, {useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const Templates = () => {
  const params = useParams()
  const [pages, setPages] = useState([])
  const [isValid, setIsValid] = useState([])
  const [name, setName] = useState('')
  const handleSubmit = () => {
    if (!name) {
      setIsValid(false)
    }
  }
  const clearForm = () => {
    setIsValid(true)
    setName('')
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5'>
          <form id='create-page' onSubmit='return validatForm(event)' noValidate>
            <div className='modal-header'>
              <h5 className='modal-title' id='addPageModalLabel'>Create Page</h5>
            </div>
            <div className='modal-body'>
              <div className='col-auto'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input
                  type='text'
                  className={`form-control form-control-sm
                  ${isValid ? '' : 'is-invalid'}`}
                  id='name'
                  name='name'
                  placeholder='Name of Page'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!isValid && (
                  <div className='invalid-feedback'>
                    Please provide a valid name.
                  </div>
                )}
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary btn-sm'
                data-bs-dismiss='modal'
                onClick={clearForm}
              >
                Clear
              </button>
              <button
                type='button'
                className='btn btn-primary btn-sm'
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className='col-12 my-2'>
          <table className='table table-bordered table-hover'>
            <thead>

            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Slug</td>
              <td>Action</td>
            </tr>
            </thead>
            <tbody>
            {
              pages.length ? pages.map(p =>
                <tr key={p._id}>
                  <td>{p._id}</td>
                  <td>{p.name}</td>
                  <td>{p.slug}</td>
                  <td>
                    <Link to={`/editor/${params.lang}/${p._id}`}>Edit</Link>
                  </td>
                </tr>
              ) : 'No pages'
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Templates;