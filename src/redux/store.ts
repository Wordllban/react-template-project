import { configureStore } from "@reduxjs/toolkit";

import item from "../components/ItemCard/item.slice";

export const store = configureStore({
  reducer: { item },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
