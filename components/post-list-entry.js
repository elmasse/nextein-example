
import React from 'react'
import Link from 'next/link'
import { Content } from 'nextein/post'

export default ({ data, content }) => {
  const { url, title, date, _entry, page = 'post' } = data

  return (
    <article>
      <h1>
        <a href={url}>{title}</a>
      </h1>
      <span>{`${new Date(date).toDateString()}`}</span>
      <Content data={data} content={content} excerpt/>
    </article>
  )
}
