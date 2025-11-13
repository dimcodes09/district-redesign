import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      title: "Animal",
      image:
        "https://imgs.search.brave.com/VolaL3-askCxPKZPYPV9aU44f1soD1KWv356zer8vpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzMjQ1/OTM1LmpwZw",
      category: "Action | Drama",

      // NEW FIELDS FOR FILTER BAR
      genre: "action",
      location: "delhi",
      price: "250"
    },
    {
      id: 2,
      title: "Brahmāstra",
      image:
        "https://imgs.search.brave.com/VqTkYhKFMhVWK183QdVwO8fH5VFO0V195HqjlC3-yHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81MzAv/Nzk1L0hELXdhbGxw/YXBlci1icmFobWFz/dHJhLWFtaXRhYmgt/YmFjaGNoYW4taG9s/ZHMtc3dvcmQtb2Yt/bGlnaHQtaW4tZmly/c3QtbG9vay1wb3N0/ZXItZnJvbS1hbGlh/LWJoYXR0LXJhbmJp/ci1rYXBvb3ItZmls/bS1icmFobSVDNCU4/MXN0cmEtdGh1bWJu/YWlsLmpwZw",
      category: "Fantasy | Action",

      genre: "action",
      location: "mumbai",
      price: "280"
    },
    {
      id: 3,
      title: "Haq",
      image:
        "https://imgs.search.brave.com/VJkwIq7UcdfFlmso46NjIW9RgUX2K5ygtbezy8DhrQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9waC1iaWcv/MjAyNS8xMC9oYXEx/NzYxODAzOTkzXzku/anBn",
      category: "UA13+ | Drama, Social",

      genre: "drama",
      location: "gurugram",
      price: "200"
    },
    {
      id: 4,
      title: "Thamma",
      image:
        "https://imgs.search.brave.com/ekxHdjcC-X0QFjEh94pSFXefH_8WUU-B-hv_GgALcnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HVXdNMlF6/WkdJdFlqYzJaUzAw/WVRFeUxXRTNPV010/TXpKak1HTTVaV1Uz/WldReFhrRXlYa0Zx/Y0djQC5qcGc",

      category: "Horror | Thriller",
      genre: "thriller",
      location: "delhi",
      price: "220"
    }
  ]
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.list.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.list = state.list.filter((movie) => movie.title !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
