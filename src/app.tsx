import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from './pages/create-room';
import { Room } from './pages/rooms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={<CreateRoom />}
            index
          />
          <Route
            element={<Room />}
            path='/room/:roomId'
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
