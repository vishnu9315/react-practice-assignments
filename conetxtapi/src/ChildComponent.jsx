import {useContext} from 'react'
import {dataContext} from './App.js'

const MainComponent = () => {
  const data = useContext(dataContext);
  console.log(data)
  return (
    <>
   <h1>{data.name}</h1>
   <h1>{data.age}</h1>
   </>
  )
}
export default MainComponent;