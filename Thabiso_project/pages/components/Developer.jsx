import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import Loading from './Loading'
import { developer_action } from '../../actions/dataActions'

const Developer = () => {
    const dispatch = useDispatch()

    const dataList = useSelector((state) => state.self)
    const { error, loading, data } = dataList

    useEffect(() => {
        dispatch(developer_action())

        if (error) {
            toast.error(error)
        }
    }, [dispatch, error])

  return (
    <>
    {
        loading ? (
          <div style={{marginLeft: 450}}>
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

export default Developer