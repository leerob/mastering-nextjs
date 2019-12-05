import {ThemeProvider, CSSReset, Box, Heading} from '@chakra-ui/core';

export default () => (
    <ThemeProvider>
        <CSSReset />
        <Box border="1px" borderRadius={8} m={4} p={4}>
            <Heading fontSize={['xs', 'xl', '4xl']}>Mastering Next.js</Heading>
        </Box>
    </ThemeProvider>
);
