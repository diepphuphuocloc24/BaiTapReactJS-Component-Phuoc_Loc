import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainTemplate from './BaiTap_LayoutComponent/MainTemplate'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MainTemplate />
    </div>
  )
}

export default App
