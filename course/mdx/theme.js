/* eslint-disable sort-keys */
export default {
    useCustomProperties: true,
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
        secondary: '#609'
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'inherit'
    },
    styles: {
        root: {
            fontFamily: 'body',
            color: 'text',
            bg: 'background'
        },
        h1: {
            fontSize: [4, 5, 6],
            color: 'text'
        },
        a: {
            color: 'primary',
            textDecoration: 'none',
            ':hover': {
                color: 'secondary',
                textDecoration: 'underline'
            }
        }
    }
};
/* eslint-enable sort-keys */
