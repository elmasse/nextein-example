
import React, { Component } from 'react'
import withPost, { Content } from 'nextein/post'

import Navigation from '../components/navigation'

const Paragraph = ({ children }) => {
  return (
   <p style={styles.paragraph}>
    {children}
   </p>
  )
}

class Post extends Component {

  render () {
    const { post } = this.props
    const { data, content } = post
    return (
      <main style={styles.main}>
        <Navigation style={styles.navigation}/>
        <article style={styles.section}>
          <h1>{data.title}</h1>
          <Content {...post}
            renderers={{
              p: Paragraph
            }}
          />
        </article>
      </main>
    )
  }
}

export default withPost(Post)

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
  },
  paragraph: {
    background: '#f5f5f5',
    padding: 20
  },
  navigation: {
    alignSelf: 'center',
    width: '60vw'
  }
}

