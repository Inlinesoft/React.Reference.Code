import { createSlice } from '@reduxjs/toolkit'

export const SET_ATTRIB_1 = 'mainPage/attrib1';
export const SET_ATTRIB_2 = 'mainPage/attrib2';
export const SET_ATTRIB_3 = 'mainPage/attrib3';
export const SET_ATTRIB_4 = 'mainPage/attrib4';

export const setAttrib1 = value => ({
  type: SET_ATTRIB_1,
  payload: value
});

export const setAttrib2 = value => ({
  type: SET_ATTRIB_2,
  payload: value
});

export const setAttrib3 = value => ({
  type: SET_ATTRIB_3,
  payload: value
});

export const setAttrib4 = value => ({
  type: SET_ATTRIB_4,
  payload: value
});

export const mainPageSlice = createSlice({
  name: 'mainPage',
  
  initialState: {
    attrib1: '',
    attrib2: '',
    attrib3: '',
    attrib4: '',
  },
  
  reducers: {
    setAttrib: (state, action) => {
      alert(action.type);
      switch(action.type){
        case SET_ATTRIB_2:
        {
          alert('in SET_ATTRIB_2');  
          state.attrib2 = action.payload;
        }
      }
    },
    setAttrib1: (state, action) => {
      
      state.attrib1 = action.payload;
      
    },
  },
})

// Action creators are generated for each case reducer function
//export const { setAttrib, setAttrib1 } = mainPageSlice.actions

export const selectAttrib1 = (state) => state.mainPage.attrib1
export const selectAttrib2 = (state) => state.mainPage.attrib2
export const selectAttrib3 = (state) => state.mainPage.attrib3
export const selectAttrib4 = (state) => state.mainPage.attrib4

//export default mainPageSlice.reducer

// Other Way

export default function reducer(state = {
  atrrib1: '',
  atrrib2: '',
  atrrib3: '',
  atrrib4: '',
}, action) {
  alert(action.type);
  switch (action.type) {
    
    case SET_ATTRIB_1:
        alert('with in attrib1');
        alert(action.payload);
        return {
            ...state,
            atrrib1: action.payload
        };

    case SET_ATTRIB_1:
        return {
            ...state,
            atrrib2: action.payload
        };

    case SET_ATTRIB_1:
        return {
            ...state,
            atrrib3: action.payload
        };

    case SET_ATTRIB_1:
        return {
            ...state,
            atrrib4: action.payload
        };

    default:
  }
  return state;
}