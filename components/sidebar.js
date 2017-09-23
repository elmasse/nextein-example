import React from 'react'

import Link from 'nextein/link'

export default ({ items }) => {
  return (
    <div>
    {
      items.map(( post, idx ) => {
        return <Link {...post} key={`sidebar-post-${idx}`}><a>{post.data.title}</a></Link>
      })
    }
    </div>
  )

}
