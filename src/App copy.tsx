import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router/index'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import { changMessageAction } from './store/modules/counter'

import Ddemo02 from './views/demo/demo'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqualApp // 浅层比较
  )
  const dispatch = useAppDispatch()
  function handleChangMessage() {
    dispatch(changMessageAction('哈哈哈哈'))
  }
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <button onClick={handleChangMessage}>修改message</button>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <Ddemo02 name="liu" age={26} />
    </div>
  )
}

export default App
