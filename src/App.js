import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './myPage/MyPage';
import Snb from './ui/Snb';
import Gnb from './ui/Gnb';
import Home from './pages/Home';

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
        {/* <Gnb />
        <div className="flex flex-row overflow-scroll">
          <Snb /> */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/main" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
