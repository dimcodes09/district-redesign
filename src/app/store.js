import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice.jsx";
import eventsReducer from "../features/events/eventsSlice.jsx";
import activitesReducer from "../features/activities/activitesSlice.jsx";
import authReducer from "../features/auth/authSlice.jsx";
import searchReducer from "../features/search/searchSlice.jsx";
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        events: eventsReducer,
        activities: activitesReducer,
        auth: authReducer,
        search: searchReducer,
    },
})