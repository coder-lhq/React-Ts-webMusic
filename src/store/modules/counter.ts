import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
}

const initialState: IState = {
  count: 100,
  message: 'Hello Redux'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})
export const { changMessageAction } = counterSlice.actions
export default counterSlice.reducer
