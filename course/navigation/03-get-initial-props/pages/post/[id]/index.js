// Next.js 9.4 polyfills isomorphic-unfetch, so this isn't needed anymore
import fetch from 'isomorphic-unfetch';

import Header from '../../../components/header';

const Post = ({ title, body }) => (
  <>
    <Header />
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

/*
 * Next.js 9.3 introduced `getServerSideProps`, which isn't an exact replacement, but probably what you want.
 * https://nextjs.org/docs/basic-features/data-fetching
 */
Post.getInitialProps = async ({ query }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = await res.json();

  return post;
};

export default Post;
