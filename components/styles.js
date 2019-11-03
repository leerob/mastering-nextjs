import {colors} from '../styles/vars';

export const color = {
    accent: '#0967D2',
    accentLight: '#ff5252',
    body: '#3a4145',
    code: '#011627',
    inlineCode: colors.text,
    inlineCodeBg: '#f3f3f3',
    lightGrey: colors.grey[200],
    primary: colors.text,
    secondary: '#fff',
    text: '#2e2e2e'
};

export const spacing = {
    padding: {
        small: 10,
        medium: 20,
        large: 30
    },
    borderRadius: {
        small: 5,
        default: 10
    }
};

export const typography = {
    type: {
        primary: '"Open Sans", system-ui',
        code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
    },
    weight: {
        regular: '300',
        bold: '700',
        extrabold: '800'
    },
    size: {
        s1: '12',
        s2: '14',
        s3: '16',
        m1: '20',
        m2: '24',
        m3: '28',
        l1: '32',
        l2: '40',
        l3: '48',
        code: '90'
    }
};
