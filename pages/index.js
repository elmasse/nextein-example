
import React from 'react'

import withPosts, { inCategory } from 'nextein/posts'

import PostListEntry from '../components/post-list-entry'
import NexteinHello from '../components/nextein-hello'

const Index = ({ posts }) => {
  
  const inPosts = posts.filter(inCategory('post'))
  const inHome = posts.filter(inCategory('home'))

  return (
    <main style={styles.main}>
      <NexteinHello/>
      <section style={styles.section}>  
        <h1>Category Post</h1>
        <p>There are {inPosts.length} posts total.</p>    
        {
          inPosts
          .map((post, idx) => <PostListEntry key={idx} {...post}/>)
        }
      </section>
      <section style={styles.section}>  
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

const styles = {
  main: {    
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    fontWeight: 100,
    display: 'flex',
    flexDirection: 'column'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '60vw' 
  }

}