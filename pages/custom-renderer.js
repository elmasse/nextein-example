
import React, { Component } from 'react'
import Head from 'next/head'
import withPost, { Content } from 'nextein/post'

import Navigation from '../components/navigation'
import Tags from '../components/tags'

class Post extends Component {

  render () {
    const { post } = this.props
    const { data, content } = post
    const tags = data.tag ? [].concat(data.tag) : []

    return (
      <main style={styles.main}>
        <Head>
          <title>Nextein | {data.title}</title>
          <link rel="stylesheet" href="/static/css/prism.css"/>
          <script src="/static/js/prism.js"></script>
        </Head>        
        <Navigation style={styles.navigation}/>
        <article style={styles.section}>
          <h1>{data.title}</h1>
          <Tags tags={tags} />
          <Content {...post}
            renderers={{
              p: Paragraph,
              pre: CodeBlock,
              code: Code
            }}
          />
        </article>
      </main>
    )
  }
}

export default withPost(Post)

// Renderers -----

const Paragraph = ({ children }) => {
  return (
   <p style={styles.paragraph}>
    {children}
   </p>
  )
}

const Code = ({ children, className, ...rest }) => {
  return (
    <code className={className || 'language-js'} {...rest}>
      {children}
    </code>
  )
}

const CodeBlock = ({ children }) => {
  return <pre style={styles.codeBlock}>{children}</pre>
}

// Styles --------

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
  },
  codeBlock: {
    border: '1px solid #ccc'
  }
}

