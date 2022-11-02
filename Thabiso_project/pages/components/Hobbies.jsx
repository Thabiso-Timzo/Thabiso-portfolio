import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Loading from './Loading'
import { hobbies_action } from '../../actions/dataActions'

const Hobbies = () => {
  const dispatch = useDispatch()

  const hobbies = useSelector((state) => state.hobbies)
  const { error, loading, data } = hobbies

  useEffect(() => {
    dispatch(hobbies_action())

    if (error) {
      toast.error(error)
    }
  }, [dispatch, error])
  return (
    <>
    {
      loading ? (
        <div style={{marginLeft: 80}}>
          <Loading />
        </div>
      ) : (
        <ul>
        {
          data.map(info => <li>{info.text}</li>)
        }
        </ul>
      )
    }
    </>
  )
}

export default Hobbies