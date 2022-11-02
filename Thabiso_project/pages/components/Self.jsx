import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Loading from './Loading'
import { self_action } from '../../actions/dataActions'

const Self = () => {
    const dispatch = useDispatch()

    const self = useSelector((state) => state.developer)
    const { error, loading, data } = self

    useEffect(() => {
        dispatch(self_action())

        if (error) {
            toast.error(error)
        }
    }, [dispatch, error])

  return (
    <>
    {
        loading ? (
          <div style={{marginLeft: 350}}>
            <Loading />
          </div>
        ) : (
          <>
            {
              data.map(info => <p>{info.text}</p>)
            }
          </> 
        )
    } 
    </>
  )
}

export default Self