import { createSlice } from '@reduxjs/toolkit'

export const mainPageSlice = createSlice({
  name: 'mainPage',
  
  initialState: {
    attrib1: '',
    attrib2: '',
    attrib3: '',
    attrib4: '',
  },
  
  reducers: {
    setAttrib1: (state, action) => {
      state.attrib1 = action.payload;
    },
    setAttrib2: (state, action) => {
      state.attrib2 = action.payload;
    },
    setAttrib3: (state, action) => {
      state.attrib3 = action.payload;
    },
    setAttrib4: (state, action) => {
      state.attrib4 = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setAttrib1, setAttrib2, setAttrib3, setAttrib4 } = mainPageSlice.actions

export const selectAttrib1 = (state) => state.mainPage.attrib1
export const selectAttrib2 = (state) => state.mainPage.attrib2
export const selectAttrib3 = (state) => state.mainPage.attrib3
export const selectAttrib4 = (state) => state.mainPage.attrib4

export default mainPageSlice.reducer
