import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      title: "Fly India Adventures",
      category: "Paragliding, Adventure",
      image:
        "https://imgs.search.brave.com/-cvgZ_8dIlMo9OggVXZsYNDToId1RPHJ03j0vsIbqEY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHd6bXN2cDdm/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sd18x/MjgwL2NfY3JvcCxn/X2N1c3RvbS92MTc2/MTg5ODU4MS9oYWlx/dWJrMHUxZGY4dG1k/ZmFjci5wbmc",
    },
    {
      id: 2,
      title: "Jubin Nautiyal Live | Delhi",
      category: "Music, Outdoor",
      image:
        "https://imgs.search.brave.com/AKZCYXSPY3xR1sH6G6aYQUzeOullOjFPG1Cz9kbQWyo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnNpZGVyLmlu/L2ltYWdlL3VwbG9h/ZC9jX2Nyb3AsZ19j/dXN0b20vdjE3NjIz/NDAxMjcvenR1dzJp/dTh6ejE4cXNiY2dw/bW8uanBn",
    },
  ],
};

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
});

export default activitiesSlice.reducer;
