import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Room } from './pages/rooms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CreateRoom } from './pages/create-room';
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
            path='/rooms/:roomId'
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
