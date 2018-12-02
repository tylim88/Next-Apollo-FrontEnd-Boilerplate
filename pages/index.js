import Head from 'next/head'
import { Fragment } from 'react'
import { Query } from 'react-apollo'
import { getUsdExchangeRate } from '../src/utils/operation'

const Index = () => (
  <Fragment>
    <Head>
      <title>USD Exchange Rate</title>
      <meta
        name='viewport'
        content='initial-scale=1.0, width=device-width'
        key='viewport'
      />
    </Head>
    <h1>USD To</h1>
    <Query notifyOnNetworkStatusChange query={getUsdExchangeRate}>
      {({ loading, error, data, refetch }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>

        return (
          <Fragment>
            <button onClick={() => refetch()}>Refetch!</button>
            {data.rates.map(({ currency, rate }) => (
              <Fragment key={currency}>
                <p>{`${currency}: ${rate}`}</p>
              </Fragment>
            ))}
          </Fragment>
        )
      }}
    </Query>
  </Fragment>
)

export default Index
