
import React from 'react'

import { Content } from 'nextein/post'

export default ({ data, content }) => {
  const { url, title, date } = data

  return (
    <article>
      <h1><a href={url}>{title}</a></h1>
      <span>{`${new Date(date).toDateString()}`}</span>
      <Content data={data} content={content} excerpt/>
    </article>
  )
}
