import { createSlice } from "@reduxjs/toolkit";

const initialState = {
list: [
  {
    title: "Animal",
    image:
"https://imgs.search.brave.com/VolaL3-askCxPKZPYPV9aU44f1soD1KWv356zer8vpM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzMjQ1/OTM1LmpwZw",
    category: "Action | Drama"
  },
  {
    title: "Brahmāstra",
    image:
"https://imgs.search.brave.com/VqTkYhKFMhVWK183QdVwO8fH5VFO0V195HqjlC3-yHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81MzAv/Nzk1L0hELXdhbGxw/YXBlci1icmFobWFz/dHJhLWFtaXRhYmgt/YmFjaGNoYW4taG9s/ZHMtc3dvcmQtb2Yt/bGlnaHQtaW4tZmly/c3QtbG9vay1wb3N0/ZXItZnJvbS1hbGlh/LWJoYXR0LXJhbmJp/ci1rYXBvb3ItZmls/bS1icmFobSVDNCU4/MXN0cmEtdGh1bWJu/YWlsLmpwZw",
    category: "Fantasy | Action"
  },

  // ⭐ Your Original Movies (keeping them also)
  {
    title: "Haq",
    image:
"https://imgs.search.brave.com/VJkwIq7UcdfFlmso46NjIW9RgUX2K5ygtbezy8DhrQA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZmlsbWliZWF0/LmNvbS9waC1iaWcv/MjAyNS8xMC9oYXEx/NzYxODAzOTkzXzku/anBn",
    category: "UA13+ | Drama, Social"
  },
  {
    title: "Thamma",
    image:
"https://imgs.search.brave.com/ekxHdjcC-X0QFjEh94pSFXefH_8WUU-B-hv_GgALcnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9HVXdNMlF6/WkdJdFlqYzJaUzAw/WVRFeUxXRTNPV010/TXpKak1HTTVaV1Uz/WldReFhrRXlYa0Zx/Y0djQC5qcGc",  }
]
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      // action.payload = { title, image, category }
      state.list.push(action.payload);
    },
    removeMovie: (state, action) => {
      // action.payload = index or title to remove
      state.list = state.list.filter(
        (movie) => movie.title !== action.payload
      );
    },
  },
});

// export actions
export const { addMovie, removeMovie } = moviesSlice.actions;

// export reducer
export default moviesSlice.reducer;
