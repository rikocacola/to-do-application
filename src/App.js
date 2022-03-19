import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"

import { fetchLists } from './actions/listAction'

import FormToDoList from './components/FormToDoList/FormToDoList'
import Navbar from './components/Navbar/Navbar'
import ToDoList from './components/ToDoList/ToDoList'
import styles from './App.module.scss'

export const App = () => {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)
  useEffect(() => {
    dispatch(fetchLists())
  }, [dispatch])

  return (
    <div className={styles['app']}>
      <Navbar/>
      <div className={styles['content']}>
        <div className={styles['form']}>
          <FormToDoList currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
        <div className={styles['list']}>
          <ToDoList setCurrentId={setCurrentId}/>
        </div>
      </div>
    </div>
  )
}
