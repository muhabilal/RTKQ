import { StyleSheet } from 'react-native'
import React from 'react'
import { store } from './src/store'
import { Provider } from 'react-redux'
import Show from './src/Show'
const App = () => {
  return (
    <Provider store={store}>
      <Show />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})