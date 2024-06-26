import { Link } from "react-router-dom";
import { ReviewDataProps } from "../../types/Review";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import useUserStore from "../../stores/useUserStore";
import { IoPerson } from "react-icons/io5";

const ReviewListItem = (props: ReviewDataProps) => {
  const { userInfo } = useUserStore();
  const repeatCnt = parseInt(props.score);

  const handleDeleteReview = async () => {
    const confirm = window.confirm("리뷰를 삭제하시겠습니까?");
    if (confirm) {
      await deleteDoc(doc(db, "Reviews", props.reviewId));
      alert("삭제되었습니다.");
    }
  };

  return (
    <>
      <div className="border rounded-xl p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {props.profileImg ? (
            <img
              className="w-7 h-7 rounded-full object-cover"
              src={props.profileImg}
              alt="profile"
            />
          ) : (
            <>
              <div className="w-7 h-7 rounded-full bg-gray-200 flex justify-center items-center">
                <IoPerson size={15} color="white" />
              </div>
            </>
          )}

          <p className="text-sm flex-1">{props.nickname}</p>
          {props.useruid === userInfo.uid && (
            <>
              <Link to={`/${props.reviewId}/update`}>
                <button className="text-sm bg-theme-color text-white p-1 rounded">
                  수정
                </button>
              </Link>
              <button
                className="text-sm bg-theme-color text-white p-1 rounded"
                onClick={handleDeleteReview}
              >
                삭제
              </button>
            </>
          )}
        </div>
        <div>
          {props.myreview ? (
            <div className="text-zinc-500">
              <Link to={`/${props.prkplceNo}/${props.prkplceNm}/review`}>
                {props.prkplceNm}
              </Link>
            </div>
          ) : (
            <div className="text-zinc-500">{props.prkplceNm}</div>
          )}

          <div>{"⭐️".repeat(repeatCnt)}</div>
        </div>
        <div>{props.text}</div>
      </div>
    </>
  );
};

export default ReviewListItem;
