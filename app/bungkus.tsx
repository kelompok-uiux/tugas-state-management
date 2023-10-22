"use client"

import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import store from './store'
import Home from './page'
const inter = Inter({ subsets: ['latin'] })

export default function  Bungkus(){
  return (
    <Provider store={store}>
      <body className={inter.className}>
        <Home/>

      
      </body>
    </Provider>
  )
}