import {
  QueryClient,
  QueryClientProvider as Provider,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const QueryClientProvider = ({ children }) => {
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
