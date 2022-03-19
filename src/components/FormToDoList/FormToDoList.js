import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styles from './FormToDoList.module.scss'
import { createList, updateList } from '../../actions/listAction'

const FormToDoList = ({currentId, setCurrentId}) => {
  const currentList = useSelector((state)=> currentId ? state.lists.find((list) => list.id === currentId) : null)
  const dispatch = useDispatch()
  const currentDate = new Date();
  const date = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}`
  const [list, setList] = useState({
    id: 0, title: '', description: '', status: 0, createdAt: date
  })
  useEffect(()=>{
    if(currentList){
      setList(currentList);
    }
  }, [currentList])
  const lists = useSelector((state) => state.lists)
  const clear = () => {
    setCurrentId(null)
    setList({id: 0, title: '', description: '', status: 0, createdAt: date})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentList){
      dispatch(updateList(list))
      clear()
    } else {
      dispatch(createList(list))
      clear()
    }
  }
  return (
      <>
      {lists.length ? 
        <div className={styles['form-wrap']}>
          <form onSubmit={handleSubmit} className={styles['form-container']}>
            {
              currentList ? 
              <input placeholder="Title" required className={styles['input-to-do']} type="text" name="title" value={list.title} onChange={(e) => setList({...list, title: e.target.value})}/>
              : 
              <input placeholder="Title" required className={styles['input-to-do']} type="text" name="title" value={list.title} onChange={(e) => setList({...list, title: e.target.value, id: (lists[lists.length - 1].id + 1)})}/>
            }
            <textarea placeholder="Description" required className={styles['input-to-do']} name="description" value={list.description} onChange={(e) => setList({...list, description: e.target.value})}/>
            <button className={styles['button-to-do']} type="submit">
              {currentList ? 'Edit' : 'Create'}
            </button>
            <button className={styles['button-clear']} onClick={clear}>
              Clear
            </button>
          </form>
        </div>
        : ''
      }
      </>
  )
}

export default FormToDoList
