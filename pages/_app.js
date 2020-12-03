import React from 'react'
import { useColorMode, ColorModeProvider } from '@chakra-ui/react'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/react'
import { DefaultSeo } from 'next-seo'
import customTheme from '../styles/theme'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import MDXComponents from '../components/MDXComponents'
import SEO from '../next-seo.config'
import { ChakraProvider } from '@chakra-ui/react'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
        `}
      />
      {children}
    </>
  )
}


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <MDXProvider components={MDXComponents}>
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </MDXProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
