// src/features/movies/moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      title: "Animal",
      image:
        "https://imgs.search.brave.com/VolaL3-askCxPKZPYPV9aU44f1soD1KWv356zer8vpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzMjQ1/OTM1LmpwZw",
      category: "Action | Drama",
      price: "₹250",
      location: "PVR / INOX",
    },
    {
      id: 2,
      title: "Brahmāstra",
      image:
        "https://imgs.search.brave.com/VqTkYhKFMhVWK183QdVwO8fH5VFO0V195HqjlC3-yHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81MzAv/Nzk1L0hELXdhbGxw/YXBlci1icmFobWFz/dHJhLWFtaXRhYmgt/YmFjaGNoYW4taG9s/ZHMtc3dvcmQtb2Yt/bGlnaHQtaW4tZmly/c3QtbG9vay1wb3N0/ZXItZnJvbS1hbGlh/LWJoYXR0LXJhbmJp/ci1rYXBvb3ItZmls/bS1icmFobSVDNCU4/MXN0cmEtdGh1bWJu/YWlsLmpwZw",
      category: "Fantasy | Action",
      price: "₹280",
      location: "IMAX",
    },
    {
      id: 3,
      title: "Haq",
      image:
        "https://imgs.search.brave.com/VJkwIq7UcdfFlmso46NjIW9RgUX2K5ygtbezy8DhrQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9waC1iaWcv/MjAyNS8xMC9oYXEx/NzYxODAzOTkzXzku/anBn",
      category: "UA13+ | Drama, Social",
      price: "₹200",
      location: "Local theatres",
    },
    {
      id: 4,
      title: "Thamma",
      image:
        "https://imgs.search.brave.com/ekxHdjcC-X0QFjEh94pSFXefH_8WUU-B-hv_GgALcnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HVXdNMlF6/WkdJdFlqYzJaUzAw/WVRFeUxXRTNPV010/TXpKak1HTTVaV1Uz/WldReFhrRXlYa0Zx/Y0djQC5qcGc",
      category: "Drama",
      price: "₹150",
      location: "Multiplex",
    },
    // You can add more here or use addMovie action
  ],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      // action.payload = { title, image, category, price, location }
      // create a simple id
      const nextId = state.list.length ? state.list[state.list.length - 1].id + 1 : 1;
      state.list.push({ id: nextId, ...action.payload });
    },
    removeMovie: (state, action) => {
      // action.payload = id or title
      state.list = state.list.filter(
        (movie) => movie.id !== action.payload && movie.title !== action.payload
      );
    },
    replaceMovies: (state, action) => {
      // replace list (useful to sync from other source)
      state.list = action.payload;
    },
  },
});

export const { addMovie, removeMovie, replaceMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
