import App, { Container } from 'next/app'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { reducer1, reducer2 } from '../src/reducers'

const logger = createLogger()
const rootReducer = combineReducers({ reducer1, reducer2 })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default MyApp
