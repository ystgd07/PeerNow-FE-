import { QueryClient, QueryClientProvider } from 'react-query';
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
import { SkeletonTheme } from 'react-loading-skeleton';
import PjtDetail from './pages/PjtDetail';
import UserMain from './pages/UserMain';
import Feedback from './pages/Feedback';
import PeerFeedback from './pages/PeerFeedback';
import MyFeedbackPage from './features/feedback/MyFeedbackPage';
import BurnDown from './pages/BurnDown';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/home" element={<Home />}>
              <Route path="main/usermain" element={<UserMain />} />
              <Route path="main/detail" element={<PjtDetail />} />
              <Route path="main" element={<Main />} />
              <Route path="mypage" element={<MyPage />} />
              <Route path="sprint" element={<Sprint />} />
              <Route path="test" element={<Test />} />
              <Route path="kanban" element={<Kanban />} />
              <Route path="backlog" element={<BackLog />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="feedback2" element={<PeerFeedback />} />
              <Route path="feedback3" element={<MyFeedbackPage />} />
              <Route path="burndown" element={<BurnDown />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </QueryClientProvider>
  );
}

export default App;
