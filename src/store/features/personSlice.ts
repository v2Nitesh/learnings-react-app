import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"

export interface Person {
    id: number;
    name: string;
    firstName: string
}

interface PersonState {
    persons: Person[];
}

const initialState: PersonState = {
    persons: []
}

export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<{ name: string }>) => {
            state.persons.push({
                id: state.persons.length,
                name: action.payload.name,
                firstName: "Dummy-Name"
              });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPerson.fulfilled,(state,action)=>{
            state.persons = action.payload.users
        })
        builder.addCase(savePerson.fulfilled,(state,action)=>{
            state.persons.push(action.payload)
        })

    }
})

export const fetchPerson = createAsyncThunk(
    "dummyjson.com/users",
    async (thunkAPI) => {
      const response = await fetch("https://dummyjson.com/users", {
        method: "GET",
      });
      const data = response.json();
      return data;
    },
  );

export const savePerson = createAsyncThunk(
    'dummyjson.com/users/add', 
    async (name: string, thunkAPI)=>{
    const response = await fetch("https://dummyjson.com/users/add",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName: name,            
        })
    })
    const data = response.json();
    return data
})

export default PersonSlice.reducer
export const {addPerson} = PersonSlice.actions