import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { TodoList as ReactReduceTodoList} from './components/ReducerTodoList.tsx'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router'
import { App } from './app.tsx'
import { ReduxTodoList } from './components/ReduxTodoList.tsx'
import { Provider } from 'react-redux'
import { store } from './utils/redux/reduxStore.ts'
import { ZustandTodoList } from './components/ZustandTodoList.tsx'
import { StateMachine } from './components/StateMachineVanilla.tsx'
import { XStateMachine } from './components/XStateMachine.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <TodoList />
//   </StrictMode>,
// )

const root = document.getElementById('root');

createRoot(root!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/client-state-manage-react/" element={<App />}>
            <Route index element={<ReactReduceTodoList />}></Route>
            <Route path='/client-state-manage-react/redux-toolkit' element={<Provider store={store}>
              <ReduxTodoList />
            </Provider>}></Route>
            <Route path='/client-state-manage-react/zustand' element={<ZustandTodoList />}></Route>
            <Route path='/client-state-manage-react/state-machine' element={
              <StateMachine />
            }></Route>
            <Route path='/client-state-manage-react/xstate-machine' element={
              < XStateMachine/>
            }></Route>
          </Route>
        </Routes>
        {/* <TodoList /> */}
      </BrowserRouter>
    </StrictMode>
);

