import fetch from 'isomorphic-unfetch';

import Header from '../../../components/header';

const Post = ({title, body}) => (
    <>
        <Header />
        <h1>{title}</h1>
        <p>{body}</p>
    </>
);

Post.getInitialProps = async ({query}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = await res.json();

    return post;
};

export default Post;
