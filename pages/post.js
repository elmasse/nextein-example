
import React, { Component } from 'react'

import withPost, { Content } from 'nextein/post'


class Post extends Component {

  render () {
    const { post } = this.props
    const { data, content } = post
    return (
      <section>
        <h1>{data.title}</h1>
        <Content {...post}/>
      </section>
    )
  }
}

export default withPost(Post)
