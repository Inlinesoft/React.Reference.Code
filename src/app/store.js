import { configureStore } from '@reduxjs/toolkit'
import mainPageReducer from '../pages/Main/mainPageSlice'

export default configureStore({
  reducer: {
    mainPage:mainPageReducer,
  },
})