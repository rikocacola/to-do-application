import React from 'react'
import { useSelector } from 'react-redux'

import styles from './ToDoList.module.scss'
import ToDoCard from '../ToDoCard/ToDoCard'

const ToDoList = ({setCurrentId}) => {
  const lists = useSelector((state) => state.lists)
  return (
    <div className={styles['to-do-list-wrap']}>
      {lists.length ?
        <>
          <div className={styles['to-do-list-undone']}>
            <div className={styles['title']}>Undone</div>
            {lists.sort((a,b)=>(new Date(a.createdAt) - new Date(b.createdAt))).map((list) => (
              list.status == 0 ? <ToDoCard key={list.id} list={list} setCurrentId={setCurrentId}/> : ''
            ))}
          </div>
          <div className={styles['to-do-list-done']}>
            <div className={styles['title']}>Done</div>
            {lists.sort((a,b)=>(new Date(b.createdAt) - new Date(a.createdAt))).map((list) => (
              list.status == 1 ? <ToDoCard key={list.id} list={list} setCurrentId={setCurrentId}/> : ''
            ))}
          </div>
        </>
        : ''
      }
    </div>
  )
}

export default ToDoList;
