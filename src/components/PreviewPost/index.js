import React from 'react'
import './style.css'

/**
* @author
* @function PreviewPost
**/

const PreviewPost = (props) => {
  return(
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
   )
  }


export default PreviewPost