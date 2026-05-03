import { createApi } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async () => {
    return { data: {} }; // always return empty success
  },
  endpoints: () => ({}),
});