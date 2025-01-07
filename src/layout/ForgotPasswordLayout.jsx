import { Outlet } from "react-router-dom";
import ArrowLeftIcon from "@/assets/arrow-left.svg";

function ForgotPasswordLayout() {
  return (
    <div className="space-y-4 max-w-xs m-auto ">
      <div className="flex flex-col items-center gap-3">
        <>
          <Outlet />
          <div className="flex items-center justify-center  gap-2 mt-4">
            <img src={ArrowLeftIcon} alt="arrow-left-icon" />
            <p className="text-primary text-sm cursor-pointer">
              Back to Log In{" "}
            </p>
          </div>
        </>
      </div>
    </div>
  );
}

export default ForgotPasswordLayout;
