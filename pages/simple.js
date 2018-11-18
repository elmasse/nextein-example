
import Link from 'nextein/link'

export default () => (
  <div>
    <h1>Hello</h1>
    <p>This is a very simple component. With a link to <Link href="/all-posts" ><a>all-posts</a></Link></p>
    <p>Or <Link href="/" ><a>Home</a></Link></p>
    <p>Or <Link href="/sub-section"><a>Sub-Section</a></Link></p>
  </div>
)
