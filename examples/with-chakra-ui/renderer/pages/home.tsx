import React from "react"
import Head from 'next/head'
import Image from 'next/image'
import { Button, Link as ChakraLink } from "@chakra-ui/react"

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from "../components/Hero"

const Home = () => (
  <React.Fragment>
    <Head>
      <title>Home - Nextron (with-typescript-chakra-ui)</title>
    </Head>
    <Container minHeight="100vh">
      <DarkModeSwitch />
      <Image
        src="/images/logo.png"
        alt="Logo image"
        height='200px'
        width='200px'
      />
      <Hero title={`⚡Electron⚡ + Next.js + Chakra UI = 🔥`} />
      <Footer>
        <Button
          as={ChakraLink}
          href="/next"
          variant="solid"
          colorScheme="teal"
          rounded="button"
          width="full"
        >
          Go to next page
        </Button>
      </Footer>

    </Container>
  </React.Fragment>
)

export default Home
