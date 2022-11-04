import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Loading from './Loading'
import { developer_action } from '../../actions/dataActions'

const Developer = () => {
  // initialise dispatch
  const dispatch = useDispatch()

  // initialise an action
  const dataList = useSelector((state) => state.self)
  const { error, loading, data } = dataList

  useEffect(() => {
    dispatch(developer_action())
    // error handling
    if (error) {
      toast.error(error)
    }
  }, [dispatch, error])

  return (
    <>
    {
        loading ? (
          <div className='developer-loading'>
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

export default Developer