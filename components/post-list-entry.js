
import React from 'react'
import Link from 'nextein/link'
import { Content } from 'nextein/post'

const countWords = (s) => {
  s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
  s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
  return s.split(' ').length; 
}

const readingTime = (words) => {
  return Math.ceil(words/200)
}

const PostListEntry = ({ data, content, raw, excerpt=true }) => {
  const { url, title, date, _entry, page = 'post' } = data
  const words = countWords(raw)
  const readTime = readingTime(words)
  return (
    <article>
      <h1>
        <Link data={data}><a>{title}</a></Link>
      </h1>
      <span>{`${new Date(date).toDateString()} | ~ ${readTime} mins | ${words} words`}</span>
      <Content data={data} content={content} excerpt={excerpt}/>
    </article>
  )
}

export default PostListEntry