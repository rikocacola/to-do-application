import React, {useState} from 'react'

import styles from './ToDoCard.module.scss'

import ModalTask from '../ModalTask/ModalTask'

const ToDoCard = ({list, setCurrentId}) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className={styles['to-do-card-warp']} onClick={() => setOpenModal(true)}>
        <div className={styles['card-title']}>
          {list.title}
        </div>
        <div className={styles['card-description']}>
          {list.description}
        </div>
        <div className={styles['card-date']}>
          {list.createdAt}
        </div>
      </div>
      <ModalTask list={list} openModal={openModal} setOpenModal={setOpenModal} setCurrentId={setCurrentId}/>
    </>
  )
}

export default ToDoCard
