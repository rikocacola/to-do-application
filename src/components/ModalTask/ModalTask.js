import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'

import styles from './ModalTask.module.scss'

import { deleteList, moveStatus } from '../../actions/listAction'

const ModalTask = ({list, openModal, setOpenModal, setCurrentId}) => {
  const dispatch = useDispatch()
  const modalInside = useRef()
  const deleteOne = () => {
    dispatch(deleteList(list.id))
    setOpenModal(false)
  }
  const editOne = () => {
    setCurrentId(list.id)
    setOpenModal(false)
  }
  
  const moveOne = () => {
    dispatch(moveStatus(list.id))
    setOpenModal(false)
  }

  const closeModal = (e) => {
      setOpenModal(false)
  }
  
  return (
    <>
    {
      openModal ? 
      <div className={styles['modal-wrap']} onClick={closeModal}>
        <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
          <p className={styles['title']}>
            {list.title}
          </p>
          <p className={styles['description']}>
            {list.description}
          </p>
          <p className={styles['createdAt']}>
            {list.createdAt}
          </p>
          {
            list.status == 0 ? 
              <>
                <button onClick={moveOne} className={styles['done']}>Done</button>
                <button onClick={deleteOne} className={styles['delete']}>Delete</button> 
              </>
            :''
          }
          <button onClick={editOne} className={styles['edit']}>Edit</button>
          
        </div>
      </div> : ''
    }
    </>
  )
}

export default ModalTask
