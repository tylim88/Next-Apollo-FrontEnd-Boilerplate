import Head from 'next/head'
import { Fragment } from 'react'
import 'tachyons'

const Index = () => (
  <Fragment>
    <Head>
      <title>My page title</title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
    </Head>
    <p className='ttu'>tachyons successfully imported</p>
  </Fragment>
)

export default Index
