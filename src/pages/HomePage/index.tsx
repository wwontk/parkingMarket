import { useEffect, useState } from "react";
import MarketList from "../../components/Market/MarketList";
import Nav from "../../components/common/Nav";
import regionList from "../../data/RegionList";
import { Link, useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import useUserState from "../../hooks/userUserState";
import { IoPerson } from "react-icons/io5";

const HomePage = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState<string | null>("");

  const { userState, updateUser } = useUserState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateUser({
          uid: user.uid,
          email: user.email,
          nickname: user.displayName,
          profileImg: user.photoURL,
          isLogin: true,
        });
        setIsLoggedIn(true);
        setNickname(user.displayName);
      }
    });
  }, []);

  const handleLoginBtnClick = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-end h-14 fixed top-0 left-0 right-0 max-w-default m-auto bg-white">
        {isLoggedIn ? (
          <>
            {userState.profileImg ? (
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover mr-4"
                src={`${userState.profileImg}`}
              ></img>
            ) : (
              <div className="h-8 w-8 rounded-full ring-2 ring-white bg-slate-200 mr-4 flex items-center justify-center">
                <IoPerson size={15} color="white" />
              </div>
            )}

            <Link to={"/mypage"}>
              <p>{nickname}</p>
            </Link>
          </>
        ) : (
          <button
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            onClick={handleLoginBtnClick}
          >
            로그인
          </button>
        )}
      </div>
      <div className="mt-14 font-bold text-3xl">
        <p className="font-medium text-sm">시장가자! 근처에 있는</p>
        <p>주차장</p>
        <p>찾아줘🚘</p>
      </div>
      <div>
        <ul className="my-10 flex whitespace-nowrap overflow-auto">
          {regionList.map((item, index) => (
            <button
              key={index}
              className="mr-4"
              onClick={() => {
                item === "전국" ? navigate("/") : navigate(`/${item}`);
              }}
            >
              <li
                className={`px-5 py-2.5 rounded-full ${
                  city === item ? "bg-theme-color text-white" : "bg-slate-100"
                } ${
                  item === "전국" && city === undefined
                    ? "bg-theme-color text-white"
                    : ""
                }`}
              >
                {item}
              </li>
            </button>
          ))}
        </ul>
      </div>
      <div className="font-medium mb-7">Traditional Market 🥬</div>
      <div className="mb-28">
        <MarketList />
      </div>
      {/* <Outlet /> */}
      <Nav />
    </>
  );
};

export default HomePage;
