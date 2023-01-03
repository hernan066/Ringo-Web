import { apiSlice } from "./apiSlice";

export const userApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 60, // duración de datos en cache
  refetchOnMountOrArgChange: true, // revalida al montar el componente
  refetchOnFocus: true, // revalida al cambiar de foco
  refetchOnReconnect: true, // revalida al reconectar
  tagTypes: ["user"],

  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/user/${id}`,
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 3 },
      providesTags: ["user"],
    }),

    postUser: builder.mutation({
      query: (items) => ({
        url: "/user",
        method: "post",
        body: items,
      }),
      invalidatesTags: ["user"],
      extraOptions: { maxRetries: 0 },
    }),

    putUser: builder.mutation({
      query: ({ id, ...items }) => ({
        url: `/user/${id}`,
        method: "put",
        body: items,
      }),
      invalidatesTags: ["user"],
      extraOptions: { maxRetries: 0 },
    }),
  }),
});

export const { useGetUserQuery, usePostUserMutation, usePutUserMutation } =
  userApi;
