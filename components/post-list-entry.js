
import React from 'react'

import { Content } from 'nextein/post'

export default ({ data, content }) => {
  return ( 
    <article>
      <h1><a href={data.url}>{data.title}</a></h1>
      <Content data={data} content={content} excerpt/>
    </article>
  )
}