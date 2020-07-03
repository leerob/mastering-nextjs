/** @jsx jsx */
import { Box, Heading, Link, Text, useColorMode } from '@chakra-ui/core';
import { jsx } from '@emotion/core';
import NextLink from 'next/link';

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)'
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    );
  }

  return <Link color={color[colorMode]} isExternal {...props} />;
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: (props) => (
    <Heading as="h2" fontWeight="bold" size="lg" mb="1em" mt="2em" {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" size="md" fontWeight="bold" mb="1em" mt="2em" {...props} />
  ),
  br: (props) => <Box height="24px" {...props} />,
  a: CustomLink,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />
};

export default MDXComponents;
