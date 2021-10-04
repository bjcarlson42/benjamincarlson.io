import React from 'react'
import { useColorMode, ColorModeProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import MDXComponents from '../components/MDXComponents'
import SEO from '../next-seo.config'
import { Chakra } from "../scripts/chakra"

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#15161a'};
          }
        `}
      />
      {children}
    </>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </Chakra>
  )
}

export default MyApp
