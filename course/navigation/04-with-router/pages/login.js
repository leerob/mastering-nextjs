import {useRouter} from 'next/router';

const Login = () => {
    const router = useRouter();

    const onLogin = (e) => {
        e.preventDefault();

        // Form validation before routing

        router.push('/dashboard');
    };

    return (
        <>
            <input placeholder="User Name" />
            <input placeholder="Password" type="password" />
            <button onClick={onLogin} type="button">
                Log In
            </button>
        </>
    );
};

export default Login;
