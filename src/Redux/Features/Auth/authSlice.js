import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const employee = JSON.parse(localStorage.getItem('employee'))

const initialState = {
    employee: employee ? employee : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
//facebook

export const socialRegister = createAsyncThunk(
    'auth/socialRegister',
    async (employee, thunkAPI) => {
        try {
            return await authService.socialRegister(employee)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)
export const addPhoneNumber = createAsyncThunk(
    'auth/addPhoneNumber',
    async (employee, thunkAPI) => {
        try {
            return await authService.addPhoneNumber(employee)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const socialLogin = createAsyncThunk(
    'auth/socialLogin',
    async (employee, thunkAPI) => {
        try {
            return await authService.socialLogin(employee)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//google

export const registerWithGoogle = createAsyncThunk(
    'auth/registerWithGoogle',
    async (employee, thunkAPI) => {
        try {
            return await authService.registerWithGoogle(employee)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const LoginWithGoogle = createAsyncThunk(
    'auth/LoginWithGoogle',
    async (employee, thunkAPI) => {
        try {
            return await authService.LoginWithGoogle(employee)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// export const register = createAsyncThunk(
//     'auth/register',
//     async (employee, thunkAPI) => {
//         try {
//             return await authService.register(employee)
//         } catch (error) {
//             const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//             return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

// export const login = createAsyncThunk(
//     'auth/login',
//     async (employee, thunkAPI) => {
//         try {
//             return await authService.login(employee)
//         } catch (error) {
//             const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
//             return thunkAPI.rejectWithValue(message)
//         }
//     }
// )

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(socialRegister.pending, (state) => {
                state.isLoading = true
            })
            .addCase(socialRegister.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(socialRegister.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.employee = null
            })
            .addCase(addPhoneNumber.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addPhoneNumber.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(addPhoneNumber.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.employee = null
            })
            .addCase(socialLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(socialLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(socialLogin.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.employee = null
            })
            .addCase(registerWithGoogle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerWithGoogle.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(registerWithGoogle.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.employee = null
            })        
            .addCase(LoginWithGoogle.pending, (state) => {
                state.isLoading = true
            })
            .addCase(LoginWithGoogle.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.employee = action.payload
            })
            .addCase(LoginWithGoogle.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.message = action.payload
                state.employee = null
            })
        // .addCase(register.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(register.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.employee = action.payload
        // })
        // .addCase(register.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = false
        //     state.message = action.payload
        //     state.employee = null
        // })
        // .addCase(login.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(login.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.employee = action.payload
        // })
        // .addCase(login.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = false
        //     state.message = action.payload
        //     state.employee = null
        // })
        .addCase(logout.fulfilled, (state) => {
            state.employee = null
            state.message = ''
        })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;