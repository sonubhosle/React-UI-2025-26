import React from 'react'
import { useParams } from 'react-router-dom'

const Category_Details = () => {

  const {name} = useParams()
  return (
    <div>Category-Details {name}</div>
  )
}

export default Category_Details