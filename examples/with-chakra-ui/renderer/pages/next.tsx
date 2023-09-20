import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Link as ChakraLink } from "@chakra-ui/react"

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'

const Next = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Next - Nextron (with-typescript-chakra-ui)</title>
            </Head>
            <Container minHeight="100vh">
                <DarkModeSwitch />
                <Image
                    src="/images/logo.png"
                    alt="Logo image"
                    height='200px'
                    width='200px'
                />
                <Hero title={`⚡ Nextron ⚡`} />
                <Footer>
                    <Button
                        as={ChakraLink}
                        href="/home"
                        variant="outline"
                        colorScheme="teal"
                        rounded="button"
                        width="full"
                    >
                        Go to home page
                    </Button>
                </Footer>

            </Container>
        </React.Fragment>
    )
}

export default Next