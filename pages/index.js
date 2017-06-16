
import React from 'react'

import withPosts, { inCategory } from 'nextein/posts'

import PostListEntry from '../components/post-list-entry'

const Index = ({ posts }) => {
  
  const inPosts = posts.filter(inCategory('post'))
  const inHome = posts.filter(inCategory('home'))

  return (
    <main>
      <section>  
        <h1>Category Post</h1>
        <p>There are {inPosts.length} posts total.</p>    
        {
          inPosts
          .map((post, idx) => <PostListEntry key={idx} {...post}/>)
        }
      </section>
      <section>  
        <h1>Category Home</h1>
        <p>There are {inHome.length} posts total.</p>    
        {
          inHome
          .map((post, idx) => <PostListEntry key={idx} {...post}/>)
        }
      </section>    
    </main>
  )
}

export default withPosts(Index)
