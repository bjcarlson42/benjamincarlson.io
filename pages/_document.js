import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../lib/gtag'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <Head>
                    {/* <link href="/favicons/favicon.ico" rel="shortcut icon" />
                    <link href="/favicons/site.webmanifest" rel="manifest" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com/"
                        crossOrigin=""
                    />
                    <link
                        href="/static/favicons/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/favicons/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/favicons/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#4a9885"
                        href="/static/favicons/safari-pinned-tab.svg"
                        rel="mask-icon"
                    /> */}
                    {/* Google Adsense */}
                    {/* <script data-ad-client="ca-pub-8586017200531248" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
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
                    <ColorModeScript/>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
