import { useSelector } from "react-redux";
import { SyncLoader } from "react-spinners";
import { RootState } from "../../redux/configStore";

type Props = {};

export default function IsLoading({}: Props) {
  const { isLoadingAuth } = useSelector((state: RootState) => state.authReducer);
  const { isLoadingProfile } = useSelector((state: RootState) => state.userReducer);
  
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 10,
        background: "#e8e8e8",
        display:
          isLoadingAuth ||
          isLoadingProfile
            ? "flex"
            : "none",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        top: 0,
        color: "#fff",
      }}
    >
      <SyncLoader color="#36d7b7" />
    </div>
  );
}
