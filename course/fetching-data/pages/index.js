import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = async (path) => {
    const res = await fetch(path);

    return res.json();
};

const Profile = () => {
    const {data, error} = useSWR('/api/users/1', fetcher);

    if (error) {
        return <div>Failed to load.</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return <div>Hello {data.name}!</div>;
};

export default Profile;
