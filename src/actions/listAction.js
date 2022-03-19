import axios from 'axios'

export const fetchLists = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list`)
    dispatch({
      type: 'FETCH_ALL_LISTS',
      payload: data
    })
  } catch (err){
    console.log(err)
  }
}

export const createList = (list) => async (dispatch) => {
  try {
    dispatch({
      type: 'CREATE_LIST',
      payload: list
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateList = (list) => async (dispatch) => {
  try {
    dispatch({
      type: 'UPDATE_LIST',
      payload: list
    })
  } catch (error) {
    console.log(error)
  }
}

export const moveStatus = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'MOVE_STATUS',
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'DELETE_LIST',
      payload: id
    })
  } catch (error) {
    console.log(error)
  }
}
