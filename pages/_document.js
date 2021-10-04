import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../scripts/gtag'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"
import theme from '../styles/theme'

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <Head>
                    {/* Google Adsense */}
                    <script data-ad-client="ca-pub-8586017200531248" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
