import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from './lib/react-query';

const queryClient = getQueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-2xl text-amber-400">tailwindcss</div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
