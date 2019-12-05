import {useRouter} from 'next/router';

import Header from '../../../components/header';

const Post = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Header />
            <h1>Post: {id}</h1>
        </>
    );
};

export default Post;
