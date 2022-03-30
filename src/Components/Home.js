import React , {useContext} from 'react'
import {Mycontext} from '../context/Context'

export const Home = () => {
    const {state} = useContext(Mycontext)
    const {name, address} = state;
  return (
    <div>
  <h4>My name is {name}</h4>
  <h4>I'm from {address}</h4>
    
    </div>
  )
}
