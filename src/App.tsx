import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import InnerCon from "./components/common/InnerCon";
import MarketPage from "./pages/MarketPage";
import ParkingLotDetailPage from "./pages/ParkingLotDetailPage";
import MyPage from "./pages/MyPage";
import SearchPage from "./pages/SearchPage";
import SearchResultPage from "./pages/SearchPage/SearchResultPage";
import DivisionCityPage from "./pages/HomePage/DivisionCityPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { RecoilRoot } from "recoil";
import EditProfilePage from "./pages/MyPage/EditProfilePage";
import MyReviewPage from "./pages/MyPage/MyReviewPage";
import ParkingLotReviewPage from "./pages/ParkingLotReviewPage";
import PostReviewPage from "./pages/ParkingLotReviewPage/PostReviewPage";

function App() {
  return (
    <>
      <RecoilRoot>
        <InnerCon>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path=":city" element={<DivisionCityPage />} />
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/market/:marketname" element={<MarketPage />} />
            <Route
              path="/parkinglot/:prkplceNo/:prkplceNm"
              element={<ParkingLotDetailPage />}
            ></Route>
            <Route
              path="/:prkplceNo/:prkplceNm/review"
              element={<ParkingLotReviewPage />}
            />
            <Route
              path="/:prkplceNo/:prkplceNm/review/post"
              element={<PostReviewPage />}
            />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/editprofile" element={<EditProfilePage />} />
            <Route path="/myreview" element={<MyReviewPage />} />
            <Route path="/search" element={<SearchPage />}>
              <Route path="list" element={<SearchResultPage />} />
            </Route>
          </Routes>
        </InnerCon>
      </RecoilRoot>
    </>
  );
}

export default App;
