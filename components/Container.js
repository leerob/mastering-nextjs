import React from 'react';
import NextLink from 'next/link';
import { Flex, Box, Icon } from '@chakra-ui/core';

const Container = ({ children }) => (
  <>
    <Box bg="#FBFBFB">
      <Box
        background="linear-gradient(270deg, #f50a81 25.28%, #9d09db 59.7%, #f722c9 97.75%)"
        w="full"
        h="15px"
      />
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        width="100%"
        as="nav"
        p={8}
        mt={[0, 0, 8]}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <NextLink href="/" passHref>
          <Box as="a">
            <Icon name="nextjs" size="32px" />
          </Box>
        </NextLink>
      </Flex>
    </Box>
    {children}
  </>
);

export default Container;
