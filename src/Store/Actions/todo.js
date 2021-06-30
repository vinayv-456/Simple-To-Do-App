import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addRandomNamesRequest: null,
  addTaskSuccess: ['task'],
  deleteTaskSuccess: ['index'],
  markCompleteTaskSuccess: ['index'],
})

// export {Types, Creators};
// export default Creators