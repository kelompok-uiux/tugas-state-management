"use client"

import Image from 'next/image'
import { FormEventHandler, useState } from 'react'

import { useSelector, useDispatch, Provider } from 'react-redux'
import store from './store'

const selectColorInState = (state:any ) => {
  return state.color[0]
}

export default function Home() {
  const color = useSelector((state) => selectColorInState(state) )

  const [colorDiv, setColorDiv] = useState("bg-blue-500")

  const dispatch = useDispatch()

  const handleColorChanged = (e:  any) => {
    const curColor = e.currentTarget.value 
    dispatch({
      type: 'color/colorSwitch',
      payload: {color: curColor }
    })
    console.log(color )
    setColorDiv(color.color )
  }

  return (
   
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <button className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={handleColorChanged} value={colorDiv}
      >
        Color Switcher 
      </button>


        <div className="flex mt-14">
          <div className={`flex-1 w-64 ${colorDiv}`}>
            Color  nih bos
          </div>

        </div>
      </div>
      </main>

  )
}
