import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_HOST, create_page} from "../api";

const Templates = () => {
  const params = useParams()
  const [pages, setPages] = useState([])
  const [isValid, setIsValid] = useState(true)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const getAllPages = async () => {
      try {
        const response = await axios.get(`${API_HOST}/`)
        setPages(response.data)
      } catch (e) {
        console.log(e)
        setError(e.message)
      }
    }
    getAllPages()
  },[])
  const handleSubmit = async () => {
    if (!name) {
      setIsValid(false)
      return
    }
    const newPage = await create_page(name)
    setName('')
    setPages([...pages, newPage])
  }
  const clearForm = () => {
    setIsValid(true)
    setName('')
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5'>
          <form id='create-page' >
            <div className='modal-header'>
              <h5 className='modal-title'>Create Page</h5>
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
          {error && (
            <div role='alert' className='alert alert-primary'>
              {error}
            </div>
          )}
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