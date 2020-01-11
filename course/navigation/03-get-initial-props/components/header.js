import Link from 'next/link';

export default () => (
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link as="/post/1" href="/post/[id]">
                    <a>First Post</a>
                </Link>
            </li>
            <li>
                <Link as="/post/2" href="/post[id]">
                    <a> Second Post</a>
                </Link>
            </li>
        </ul>
    </header>
);
