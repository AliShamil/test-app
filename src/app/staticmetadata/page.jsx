import React from 'react'
export const metadata = {
    title: "Static metadata",
    description: "Show static metadata",
  };

const StaticMetaData = () => {
  return (
    <div>{metadata.description}</div>
  )
}

export default StaticMetaData