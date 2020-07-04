import React from 'react';
import {
  Heading,
  Flex,
  Stack,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  Link,
  Icon,
  Avatar,
  Button
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const VideoCard = ({ title, length, href, children, ...rest }) => (
  <Link
    href={href}
    isExternal
    borderRadius={8}
    {...rest}
    _hover={{
      textDecoration: 'none',
      transform: 'scale(1.02)'
    }}
  >
    <Flex direction={['column', 'column', 'row']}>
      <Box
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.2)"
        borderRadius={8}
        w="250px"
        h="150px"
        mr={8}
        as="img"
        objectFit="cover"
        src="/video.png"
      />
      <Stack>
        <Heading
          letterSpacing="tight"
          as="h3"
          size="md"
          fontWeight="medium"
          mb={0}
          mt={[4, 4, 0]}
        >
          {title}
        </Heading>
        <Text color="gray.600" mb={2} fontSize="xs">
          {length}
        </Text>
        <Text color="gray.700" mb={2} fontSize="sm" maxW="300px">
          {children}
        </Text>
      </Stack>
    </Flex>
  </Link>
);

const Index = () => (
  <Box as="main">
    <Flex justifyContent="center" flexDirection="column" bg="#FBFBFB">
      <Container>
        <Stack
          as="section"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m={['0 auto', null, '0 auto 4rem auto']}
          maxWidth="600px"
          p={8}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="600px"
          >
            <Heading
              letterSpacing="tight"
              mb={4}
              as="h1"
              size="2xl"
              fontWeight="bold"
            >
              Learn Next.js
              <Box>
                today{' '}
                <Box display="inline" backgroundColor="#ff9cf9">
                  100% free.
                </Box>
              </Box>
            </Heading>
            <Text color="gray.700" mb={4} fontSize="lg">
              A free video course for building static and server-side rendered
              applications with Next.js and React.
            </Text>
            <Button
              as="a"
              href="#course-overview"
              fontWeight="bold"
              h="2.5rem"
              mr={1}
              size="md"
              bg="gray.800"
              color="white"
              _hover={{ bg: 'black' }}
            >
              Watch Now →
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Flex>
    <Flex justifyContent="center" flexDirection="column">
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="600px"
        mt={[4, 8, 16]}
        p={8}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="600px"
        >
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            You need a framework that evolves.
          </Heading>
          <Text color="gray.700" mb={4}>
            As your React application scales and requirements change, you need a
            framework that you can depend on. Next.js allows you to seamlessly
            merge static sites, pre-rendered pages, and serverless functions.
          </Text>
          <Text color="gray.700" mb={4}>
            No wonder <b>~30% of React developers</b> choose Next.js.
          </Text>
          <List spacing={2} mt={4}>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check" color="green.500" />
              Blazing-fast Jamstack sites
            </ListItem>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check" color="green.500" />
              Server-rendered pages
            </ListItem>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check" color="green.500" />
              Zero-config TypeScript
            </ListItem>
            <ListItem
              fontWeight="medium"
              fontSize="lg"
              alignItems="center"
              display="flex"
            >
              <ListIcon icon="check" color="green.500" />
              Fully extensible
            </ListItem>
          </List>
          <Divider borderColor="gray.200" my={16} w="100%" />
          <Heading
            letterSpacing="tight"
            mt={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            Hundreds of customers, thousands of views.
          </Heading>
          <Text color="gray.700" mt={4}>
            After teaching hundreds of developers around the world, I've made
            this course <b> free</b>. Why? Learning Next.js will{' '}
            <b> transform</b> your career as a front-end developer.
          </Text>
          <Text color="gray.700" mt={4}>
            With almost five hours of content, this course will kickstart your
            career as a modern front-end developer. If you're familiar with
            basic HTML/CSS, JavaScript, and React – you've found the right
            course.
          </Text>
          <List spacing={2} mt={8} as="ol" styleType="decimal">
            <ListItem fontWeight="medium" fontSize="lg">
              Beginner Friendly
            </ListItem>
            <ListItem fontWeight="medium" fontSize="lg">
              Open-Source Code
            </ListItem>
            <ListItem fontWeight="medium" fontSize="lg">
              High-Quality Video & Audio
            </ListItem>
          </List>
          <Divider borderColor="gray.200" my={16} w="100%" />
          <Heading
            letterSpacing="tight"
            mb={4}
            as="h2"
            size="lg"
            fontWeight="bold"
            id="course-overview"
          >
            Course Overview
          </Heading>
          <Text color="gray.700" mt={4}>
            All videos are
            <b> 100% free.</b> If you'd like to support me, you can
            pay-what-you-want on&nbsp;
            <Link
              isExternal
              fontWeight="bold"
              href="https://gumroad.com/leerob#sDpG"
              textDecoration="none"
              borderBottom="2px solid #ff9cf9"
              transition="all 0.1s ease-in"
              _hover={{
                textDecoration: 'none',
                borderBottom: '2px solid #09DB1F'
              }}
            >
              Gumroad
            </Link>
            &nbsp;or check out my new course&nbsp;
            <Link
              isExternal
              fontWeight="bold"
              href="https://react2025.com"
              textDecoration="none"
              borderBottom="2px solid #ff9cf9"
              transition="all 0.1s ease-in"
              _hover={{
                textDecoration: 'none',
                borderBottom: '2px solid #09DB1F'
              }}
            >
              React 2025.
            </Link>
          </Text>
          <Stack mt={8} spacing={8}>
            <VideoCard
              title="Introduction"
              length="26:07"
              href="https://www.youtube.com/watch?v=uQeidE2LA1s&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Learn about the fundamentals of Next.js and how it compares to
              Gatsby and Create React App.
            </VideoCard>
            <VideoCard
              title="React Overview"
              length="21:01"
              href="https://www.youtube.com/watch?v=cahFm8eeeJI&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              A quick refresher on props and state, classes vs. functional
              components, and React Hooks.
            </VideoCard>
            <VideoCard
              title="Developing Locally"
              length="9:49"
              href="https://www.youtube.com/watch?v=KojdxS-1ot8&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Install Next.js and get it running locally, with thoughts about
              linting and formatting.
            </VideoCard>
            <VideoCard
              title="Navigating Between Pages"
              length="19:25"
              href="https://www.youtube.com/watch?v=ERUHYh_65F4&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Learn how to make client-side transitions between pages and fetch
              data from URLs.
            </VideoCard>
            <VideoCard
              title="Styling"
              length="20:04"
              href="https://www.youtube.com/watch?v=2t6y-bDIe0Y&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Configure CSS, Sass, or CSS-in-JS, while discussing responsive and
              mobile-first design.
            </VideoCard>
            <VideoCard
              title="Fetching Data"
              length="46:30"
              href="https://www.youtube.com/watch?v=0UjtqQGLMks&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Ditch your custom server for API Routes with Hasura and GraphQL.
            </VideoCard>
            <VideoCard
              title="Managing Assets and SEO"
              length="14:19"
              href="https://www.youtube.com/watch?v=fJL1K14F8R8&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Handle image compression, optimization, and learn about meta tags
              and the open-graph schema.
            </VideoCard>
            <VideoCard
              title="Building A Blog With MDX"
              length="32:32"
              href="https://www.youtube.com/watch?v=dsCfi0yRr1w&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Hands-on example building an MDX blog and using StaticKit and
              Theme UI.
            </VideoCard>
            <VideoCard
              title="Authentication"
              length="23:34"
              href="https://www.youtube.com/watch?v=1BUT7T9ThlU&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Learn about JWTs and pros/cons between Auth0 and Firebase. Build
              login and sign-up pages.
            </VideoCard>
            <VideoCard
              title="Testing & Error Handling"
              length="33:12"
              href="https://www.youtube.com/watch?v=yPBtVxDEC0w&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Testing best practices with React Testing Library and handling
              errors with Sentry.
            </VideoCard>
            <VideoCard
              title="State Management & More"
              length="25:41"
              href="https://www.youtube.com/watch?v=MR43-gYVQbI&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Should I use Redux or React Context? Plus, configuring TypeScript
              and more.
            </VideoCard>
            <VideoCard
              title="Exporting & Deployment"
              length="11:20"
              href="https://www.youtube.com/watch?v=OQ4O4daD434&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Ship your application with Vercel or Netlify and learn about
              pre-rendering and serverless functions.
            </VideoCard>
            <VideoCard
              title="Static Sites with Next.js 9.3"
              length="26:11"
              href="https://www.youtube.com/watch?v=wk-dUsLUADg&list=PL6bwFJ82M6FXjyBTVi6WSCWin8q_g_8RR"
            >
              Build a static site backed by a Prisma database in this complete
              tutorial.
            </VideoCard>
          </Stack>

          <Divider borderColor="gray.200" my={16} w="100%" />
          <Heading
            letterSpacing="tight"
            mt={4}
            as="h2"
            size="lg"
            fontWeight="bold"
          >
            What people are saying.
          </Heading>
          <Text color="gray.700" mt={4} fontStyle="italic" fontSize="lg">
            "Lee is an awesome teacher and I really enjoyed taking this course.
            It not only touches on the core of Next.js, but also broader
            concepts like TypeScript, testing and authentication. Videos are
            great quality and good length. I would definitely recommend to both
            newcomers to Next.js as well as to people who want to sharpen
            themselves on the Next.js fundamentals." –– Maurits Misana
          </Text>
          <Flex
            color="gray.900"
            mt={2}
            fontWeight="bold"
            pr={8}
            align="center"
            justify="flex-end"
            w="full"
          >
            <Icon name="nextjs" mr={2} />
            Mastering Next.js
          </Flex>
          <Text color="gray.700" mt={16} fontStyle="italic" fontSize="lg">
            "Not only did I enjoy your Mastering Next.js course, but I learned
            many things entirely new to me. This course opened my eyes to what's
            possible and what you can achieve with these technologies." –– José
            Llamas
          </Text>
          <Flex
            color="gray.900"
            mt={2}
            mb={8}
            fontWeight="bold"
            pr={8}
            align="center"
            justify="flex-end"
            w="full"
          >
            <Icon name="nextjs" mr={2} />
            Mastering Next.js
          </Flex>
          <Divider borderColor="gray.200" my={8} w="100%" />
          <Subscribe />
          <Flex align="center">
            <Avatar
              size="lg"
              name="Lee Robinson"
              src="https://bit.ly/33vEjhB"
              mr={4}
            />
            <Box>
              <Text color="gray.700" mt={4} fontSize={['sm', 'lg']}>
                <b>I'm Lee Robinson</b> –– developer, writer, and the creator of
                Mastering Next.js and React 2025.
              </Text>
              <Link
                mt={2}
                isExternal
                href="https://leerob.io"
                textDecoration="none"
                borderBottom="2px solid #ff9cf9"
                transition="all 0.1s ease-in"
                fontStyle="italic"
                fontSize={['sm', 'md']}
                _hover={{
                  textDecoration: 'none',
                  borderBottom: '2px solid #09DB1F'
                }}
              >
                more about me &#187;
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  </Box>
);

export default Index;
