import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Loading from './Loading'
import { self_action } from '../../actions/dataActions'

const Self = () => {
   // Initialise dispatch
    const dispatch = useDispatch()

    // Initialise an action
    const self = useSelector((state) => state.developer)
    const { error, loading, data } = self

    useEffect(() => {
        dispatch(self_action())
        
        // Error handling
        if (error) {
            toast.error(error)
        }
    }, [dispatch, error])

  return (
    <>
    {
        loading ? (
          <div className='self-loading'>
            <Loading />
          </div>
        ) : (
          <>
            {
              data.map((info, index) => <p key={index}>{info.text}</p>)
            }
          </> 
        )
    } 
    </>
  )
}

export default Self