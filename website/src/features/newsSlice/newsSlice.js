import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    body: "Capital Confidential: ‘Big Short’ author contemplates taking on Brexit",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img1.jpeg",
  },
  {
    body: "U.K. assets are too hot to handle right now, top investors say",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img2.jpeg",
  },
  {
    body: "Europe’s largest money manager warns of an investment industry liquidity crisis",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img3.jpeg",
  },
  {
    body: "Short-seller Muddy Waters attacks litigation fund Burford",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img4.jpeg",
  },
  {
    body: "Capital Confidential: ‘Big Short’ author contemplates taking on Brexit",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img5.jpeg",
  },
  {
    body: "Wall Street falls on stalling economic rebound, stimulus impasse",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img6.jpeg",
  },
  {
    body: "Exclusive: U.S. offers tariff truce if Airbus repays billions in aid, sources say",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img7.jpeg",
  },
  {
    body: "Analysis: Imported tortillas? Big Mexican farmers fear cuts will hit harvests",
    id: nanoid(),
    createdAt: "Oct. 29, 2019 at 6:06 a.m. ET ",
    tag: "company news",
    imgUrl: "assets/img8.jpeg",
  },
];

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
});

export default newsSlice.reducer;

export const getAllNews = (state) => {
  return state.news;
};
