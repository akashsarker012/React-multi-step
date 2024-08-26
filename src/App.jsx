import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiStepForm from './components/MultiStepForm'

function App() {
  const formArray= [1,2,3,4]
  const [formNo, setFormNo] = useState(0)

  return (
<div className=' w-full bg-slate-400 h-screen flex flex-col gap-4 justify-center items-center'>
  <MultiStepForm/>
</div>
  )
}

export default App
