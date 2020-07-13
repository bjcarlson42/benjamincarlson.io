import Head from 'next/head'
import GearAll from '../components/GearAll'

export default function Index() {
    return (
        <div className='main'>
            <div className="container">
                <Head>
                    <title>Gear | Benjamin J. Carlson</title>
                    <meta name="description" content="When you are programming, the gear you use is important. This is a list of the software and hardware I use often." />
                </Head>
                <h1 className="title-padding">Gear Repository</h1>
                <p style={{ fontSize: '20px' }}>Productivity is directly associated with selecting the right software and hardware. Here is a list of all the gear I use on a day to day basis.</p>
                <p style={{ color: 'darkgrey', fontSize: '15px' }}>Disclosure: I am a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for me to earn fees by linking to Amazon.com and affiliated sites.</p>
                <GearAll />
            </div>
        </div>
    )
}