import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Counter from './components/Counter/counter.jsx'
import Toggle from './components/Toggle/toggle.jsx'
import InputMirror from './components/Input-Mirror/inputMirror.jsx'
import SimpleForm from './components/Simple-Form/simpleForm.jsx'
import BackgroundChanger from './components/Background-Changer/backgroundChanger.jsx'
import TodoList from './components/Todo-List/TodoList.jsx'
import ModeChanger from './components/Mode-Changer/modeChanger.jsx'
import CharacterCounter from './components/CharacterCounter/character-counter.jsx'
import RandomNumberGenerator from './components/RandomNumberGenerator/random-number.jsx'
import StopWatch from './components/Stop-Watch/StopWatch.jsx'

// Routes setup
const route = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<App/>
      },
      {
        path: 'counter',
        element:<Counter/>
      },
      {
        path : 'toggle',
        element : <Toggle/>
      },
      {
        path : 'input-mirror',
        element : <InputMirror/>
      },
      {
        path : 'simple-form',
        element : <SimpleForm/>
      },
      {
        path : 'background-changer',
        element : <BackgroundChanger/>
      },
      {
        path : 'todo-list',
        element : <TodoList/>
      },
      {
        path : 'mode-changer',
        element : <ModeChanger/>
      },
      {
        path : 'character-counter',
        element : <CharacterCounter/>
      },
      {
        path : 'stop-watch',
        element : <StopWatch/>
      },
      {
        path : 'mode-changer',
        element : <ModeChanger/>
      },
      {
        path : 'random-generator',
        element : <RandomNumberGenerator/>
      },
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
)
