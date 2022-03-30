import React ,{createContext} from 'react'

export const Mycontext = createContext(["", () => {}])
export const ContextWrap = (props) => {
    const [state, setState] = React.useState({
      name: "RafiUllah",
      address: "Swat",
    })
  return (
    <div>

        <Mycontext.Provider value={{state}}>
        {props.children}
        </Mycontext.Provider>
    </div>
  )
}
