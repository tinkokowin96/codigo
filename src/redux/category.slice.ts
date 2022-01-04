import { createSlice } from "@reduxjs/toolkit"
import { AL, BF, CI, eCategory, FB, HC, LS, OT, RE, SU, TC, TL } from "../data/work.data"

export interface iCategoryState {
  category: iInitialState
}

export interface iInitialState {
  category: eCategory
  data: any
  key: string
}

const initialState: iInitialState = {
  category: eCategory.AL,
  data: AL,
  key: "AL",
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      console.log("prevc", state.category)
      switch (action.payload) {
        case "AL":
          state.category = eCategory.AL
          state.data = AL
          state.key = "AL"
          return state
        case "FB":
          state.category = eCategory.FB
          state.data = FB
          state.key = "FB"
          return state
        case "TL":
          state.category = eCategory.TL
          state.data = TL
          state.key = "TL"
          return state
        case "BF":
          state.category = eCategory.BF
          state.data = BF
          state.key = "BF"
          return state
        case "LS":
          state.category = eCategory.LS
          state.data = LS
          state.key = "LS"
          return state
        case "CI":
          state.category = eCategory.CI
          state.data = CI
          state.key = "CI"
          return state
        case "HC":
          state.category = eCategory.HC
          state.data = HC
          state.key = "HC"
          return state
        case "RE":
          state.category = eCategory.RE
          state.data = RE
          state.key = "RE"
          return state
        case "TC":
          state.category = eCategory.TC
          state.data = TC
          state.key = "TC"
          return state
        case "OT":
          state.category = eCategory.OT
          state.data = OT
          state.key = "OT"
          return state
        case "SU":
          state.category = eCategory.SU
          state.data = SU
          state.key = "SU"
          return state
        case "MD":
          state.category = eCategory.NT
          state.data = null
          state.key = "MD"
          return state

        default:
          return state
      }
    },
  },
})

export const { changeCategory } = categorySlice.actions
export default categorySlice.reducer
