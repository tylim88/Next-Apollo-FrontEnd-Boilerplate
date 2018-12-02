import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import client from '../src/utils/getClient'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default MyApp
