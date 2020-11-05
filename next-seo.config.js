const title = 'Benjamin Carlson – Developer, writer, creator.'
const description =
    'Personal portfolio and resume website for Benjamin J. Carlson, a student, developer, writer, and creator attending CCSU in Connecticut.'

const SEO = {
    title,
    description,
    canonical: 'https://benjamincarlson.io',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://benjamincarlson.io',
        title,
        description,
        images: [
            {
                url: 'https://benjamincarlson.io/images/logo.png',
                alt: title
            }
        ]
    },
    twitter: {
        handle: '@bjmncrlsn',   
        site: '@bjmncrlsn',
        cardType: 'summary_large_image'
    }
}

export default SEO