import fetch from 'isomorphic-unfetch';

const Dashboard = ({name, bio, blog}) => (
    <>
        <h1>{name}</h1>
        <p>{`Bio: ${bio}`}</p>
        <p>{`Blog: ${blog}`}</p>
    </>
);

Dashboard.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/leerob');
    const user = await res.json();

    return user;
};

export default Dashboard;
