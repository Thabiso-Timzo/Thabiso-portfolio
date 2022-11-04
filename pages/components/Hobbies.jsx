import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Loading from './Loading'
import { hobbies_action } from '../../actions/dataActions'

const Hobbies = () => {
  // initialise dispatch
  const dispatch = useDispatch()

  // initialise an action
  const hobbies = useSelector((state) => state.hobbies)
  const { error, loading, data } = hobbies

  useEffect(() => {
    dispatch(hobbies_action())

    // error handling
    if (error) {
      toast.error(error)
    }
  }, [dispatch, error])
  return (
    <>
    {
      loading ? (
        <div className='hobbies-loading'>
          <Loading />
        </div>
      ) : (
        <ul>
        {
          data.map((info, index) => <li key={index}>{info.text}</li>)
        }
        </ul>
      )
    }
    </>
  )
}

export default Hobbies