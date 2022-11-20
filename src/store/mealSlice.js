import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const getMeals = createAsyncThunk("meal/getMeals", async (_,thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
        const res = await fetch(url);
        const json = await res.json();
        const data = json.meals;
        const adjustedData = []
        let myData = []
        myData = data
        for (let i = 0; i < myData.length; i++) { 
            const randomNum = (Math.ceil(((Math.random() * 27.05) + 15)*20)/20).toFixed(2)         
            const randomPrice = randomNum.toLocaleString(undefined, {maximumFractionDigits:2})
            adjustedData.push({id: myData[i].idMeal,  name: myData[i].strMeal, price : randomPrice, img: myData[i].strMealThumb})
          }
        return adjustedData

    } catch (e) {
        return rejectWithValue(e.message);
    }
})

const mealSlice = createSlice({
    name: "mealSlice",
    initialState: {meals: [], isLoading : false, error : null},
    extraReducers: {
        [getMeals.pending]: (state,action) => {
            state.isLoading = true;
            state.error = null
        },
        [getMeals.fulfilled]: (state,action) => {
            state.isLoading = false;
            state.meals = action.payload
        },
        [getMeals.rejected]: (state,action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})


export default mealSlice.reducer