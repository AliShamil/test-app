import React from 'react'

export const generateMetadata = ({ params }) => {
    return {
        title: params.dynamicmetadata
    }
}

const DynamicMetaData = () => {
  return (
    <div>DynamicMetaData</div>
  )
}

export default DynamicMetaData