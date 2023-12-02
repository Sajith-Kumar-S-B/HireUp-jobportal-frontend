import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../services/baseUrl";
import axios from "axios";



export const getUserAsync = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch}) => {
    try {

     



      const { data } = await axios.get(`${BASE_URL}/auth/login/success`, {
        withCredentials: true,
        
      });

     
      
      dispatch(setGoogleSignup(data.user));
     
    } catch (err) {
      console.log(err.response?.data);
      // You can dispatch an action here if needed
    }
  }
);

    


export const googleRegisterAsync = createAsyncThunk('user/googleRegister',
async (_, { dispatch }) => {
  try {
    // Redirect the user to Google's authentication endpoint
    window.location.href = `${BASE_URL}/auth/google/callback`;
  } catch (err) {
    console.error(err);
  }

  


})



const INITIAL_STATE = {
     googleSignup:null
}

const authSlice = createSlice({
      name:'auth',
    initialState:INITIAL_STATE,
    
    reducers:{

        setGoogleSignup: (state,action) => {
            state.googleSignup = action.payload;
          },
          

    },
    extraReducers: (builder) => {

      builder.addCase(getUserAsync.fulfilled, (state, action) => {
      });
      builder.addCase(googleRegisterAsync.fulfilled, (state, action) => {
      });
     
    
    }
}
)

export const {setGoogleSignup} = authSlice.actions
export default authSlice.reducer