import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Test from './features/newproject/Test';
import Sprint from './pages/Sprint';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

import Kanban from './pages/Kanban';
import BackLog from './pages/BackLog';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/home" element={<Home />}>
            <Route path="main" element={<Main />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="sprint" element={<Sprint />} />
            <Route path="test" element={<Test />} />
            <Route path="kanban" element={<Kanban />} />
            <Route path="backlog" element={<BackLog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
