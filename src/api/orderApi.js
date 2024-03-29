import { apiSlice } from "./apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  keepUnusedDataFor: 60, // duración de datos en cache
  refetchOnMountOrArgChange: true, // revalida al montar el componente
  refetchOnFocus: true, // revalida al cambiar de foco
  refetchOnReconnect: true, // revalida al reconectar
  tagTypes: ["orders"],

  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 5 },
      providesTags: ["orders"],
    }),

    getOrder: builder.query({
      query: (id) => `/orders/${id}`,
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 3 },
      providesTags: ["orders"],
    }),
    getUserOrder: builder.query({
      query: (id) => `/orders/user/${id}`,
      // keepUnusedDataFor: 3,
      extraOptions: { maxRetries: 3 },
      providesTags: ["orders"],
    }),

    postOrder: builder.mutation({
      query: (items) => ({
        url: "/orders",
        method: "post",
        body: items,
      }),
      invalidatesTags: ["orders"],
      extraOptions: { maxRetries: 0 },
    }),

    putOrder: builder.mutation({
      query: ({ id, ...items }) => ({
        url: `/orders/${id}`,
        method: "put",
        body: items,
      }),
      invalidatesTags: ["orders"],
      extraOptions: { maxRetries: 0 },
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["orders"],
      extraOptions: { maxRetries: 0 },
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
  useGetUserOrderQuery,
  usePostOrderMutation,
  usePutOrderMutation,
  useDeleteOrderMutation,
} = orderApi;