import { createSlice } from "@reduxjs/toolkit";

const initialState = {
list: [
  {
    id: 1,
    title: "Sunidhi Chauhan - I Am Home India Tour | Delhi",
    category: "Concert",
    image:
"https://imgs.search.brave.com/iR66PrrUWPADQLxkTWpSMHnySr6BsTQ43d1zWz0qpRo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnNpZGVyLmlu/L2ltYWdlL3VwbG9h/ZC9jX2Nyb3AsZ19j/dXN0b20vdjE3NjEx/MzA1NzUvYWY2dGZ6/cGwwbnBxb3J5aHR4/cGgucG5n"  },
  {
    id: 2,
    title: "A.R. Rahman - Harmony of Hearts | New Delhi",
    category: "Music Show",
    image:
"https://imgs.search.brave.com/3te0st0AWb8Y3wGCq-neARi6HI3igrRVjtxeoHdKw_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pbnNpZGVyLmlu/L2ltYWdlL3VwbG9h/ZC9jX2Nyb3AsZ19j/dXN0b20vdjE3NjI1/MDAyMjkvdWN4MmZ0/emE5b3lzbHBtbTNz/YnYuanBn"  },

  // ⭐ Newly added:
  {
    id: 3,
    title: "AP Dhillon Live – India Tour 2025",
    category: "Concert",
    image:
"https://imgs.search.brave.com/vb-1iyHXXw8tyhtgYDaHgjsFqSLrIMQoNNcaUR-OuFc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbi5l/dmVudGZhcXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9zaXRl/cy8yLzIwMjUvMDkv/UFJPTU9URVJTLUtW/X0FQLU9ORS1PRi1P/TkUtVE9VUl9PUEVO/LUZJTEVfUGFnZTEu/cG5n"  },
  {
    id: 4,
    title: "Sunburn Arena Ft. Alan Walker | Gurugram",
    category: "EDM Festival",
    image:
"https://imgs.search.brave.com/D5xtldggyHU7CWZswF52O1uiibs3Kqpech6efPVrTa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJlbWllcnRpY2tl/dHMuY28vYXNzZXRz/L3VwbG9hZHMvMjAy/NC8wOS9hbGFuLmpw/Zw"  },
],
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export default eventsSlice.reducer;
