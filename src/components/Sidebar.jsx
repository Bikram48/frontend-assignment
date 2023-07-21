import React from "react";
import { useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { setToggle } from "../redux/actions/actions";

export default function Sidebar() {
  const dispatch = useDispatch();

  const isMobileToggle = useSelector((state) => {
    console.log(state);
    return state.isToggle;
  });

  return (
    <>
      {isMobileToggle ? (
        <div className="bg-[#1C1B23] h-screen w-screen absolute top-0">
          <div
            className="flex justify-end m-2"
            onClick={() => dispatch(setToggle(false))}
          >
            <ImCross />
          </div>
        </div>
      ) : null}
    </>
  );
}
