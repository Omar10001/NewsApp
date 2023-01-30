import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full h-full fixed md:absolute left-0 ">
      <div className="bg-transparent w-[60px] md:w-[260px] h-full border-r border-[#282d2f] md:px-10 py-5 flex flex-col justify-between items-center md:items-start fixed ">
        <div className="flex flex-col items-center md:items-start gap-10">
          <NavLink to="home">
            <svg
              className="aspect-auto w-5"
              viewBox="0 0 29 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.61813 33.304V53.464C8.61813 55.48 9.11413 57.032 10.1061 58.12C11.0981 59.208 12.5541 59.752 14.4741 59.752C16.3941 59.752 17.8661 59.208 18.8901 58.12C19.9141 57.032 20.4261 55.48 20.4261 53.464V33.304H28.6341V53.416C28.6341 56.424 27.9941 58.968 26.7141 61.048C25.4341 63.128 23.7061 64.696 21.5301 65.752C19.3861 66.808 16.9861 67.336 14.3301 67.336C11.6741 67.336 9.29013 66.824 7.17813 65.8C5.09813 64.744 3.45013 63.176 2.23413 61.096C1.01813 58.984 0.410125 56.424 0.410125 53.416V33.304H8.61813Z"
                fill="#d7d8db"
              />
              <path
                d="M24.8345 10.9235L24.8178 10.9061C24.8164 10.9051 24.8154 10.9038 24.8147 10.9023L14.3918 0L3.96891 10.902C3.96772 10.9033 3.96704 10.905 3.96583 10.9058L3.94863 10.9232C2.35484 12.5996 1.3425 14.7852 1.07256 17.1325C0.802612 19.4798 1.29055 21.8542 2.4588 23.8781C3.62706 25.9021 5.40858 27.4596 7.52018 28.3028C9.63177 29.146 11.9523 29.2268 14.1127 28.5321C14.2945 28.4739 14.4889 28.4739 14.6707 28.5321C16.831 29.2265 19.1513 29.1457 21.2628 28.3024C23.3743 27.459 25.1556 25.9017 26.3238 23.8779C27.4919 21.854 27.9799 19.4798 27.7101 17.1327C27.4403 14.7855 26.4281 12.5999 24.8345 10.9235ZM7.67514 18.1127C7.6244 18.1658 7.58416 18.2288 7.55672 18.2981C7.52927 18.3673 7.51514 18.4417 7.51515 18.5167C7.53369 20.4409 8.05359 22.3232 9.01887 23.9613C9.04079 23.9985 9.05092 24.042 9.04782 24.0855C9.04471 24.129 9.02852 24.1704 9.00155 24.2037C8.97459 24.2371 8.93824 24.2606 8.8977 24.271C8.85717 24.2814 8.81452 24.2782 8.77586 24.2617C8.0502 23.9425 7.39096 23.4784 6.83502 22.8954C5.69573 21.7035 5.05524 20.0874 5.0542 18.402C5.05316 16.7165 5.69168 15.0995 6.82952 13.9062L14.3918 5.9971L21.9536 13.9062C23.0916 15.0994 23.7304 16.7164 23.7293 18.402C23.7283 20.0874 23.0877 21.7035 21.9484 22.8954C21.3924 23.4784 20.7332 23.9425 20.0077 24.2617C19.9689 24.2782 19.9263 24.2814 19.8857 24.271C19.8452 24.2606 19.8089 24.237 19.7818 24.2037C19.7549 24.1704 19.7386 24.129 19.7356 24.0853C19.7325 24.0419 19.7425 23.9984 19.7645 23.9612C20.73 22.3232 21.2501 20.4409 21.269 18.5167C21.269 18.4417 21.2547 18.3673 21.2271 18.2979C21.1995 18.2285 21.1592 18.1656 21.1083 18.1125L17.5315 14.1443C17.4958 14.1132 17.451 14.0961 17.4046 14.0961C17.3583 14.0961 17.3133 14.1132 17.2778 14.1443C17.2421 14.1752 17.2182 14.2185 17.2098 14.2662C17.2015 14.3139 17.2094 14.363 17.2323 14.4053C18.6215 17.0347 17.4269 20.8115 15.4348 22.8954L15.4243 22.9064C15.1494 23.1909 14.7782 23.3504 14.3915 23.3503C14.0047 23.3501 13.6336 23.1903 13.3589 22.9057L13.3492 22.8954C11.3564 20.8115 10.1624 17.0351 11.5518 14.4058C11.5747 14.3636 11.5826 14.3145 11.5743 14.2667C11.566 14.219 11.542 14.1758 11.5064 14.1448C11.4708 14.1137 11.4259 14.0967 11.3795 14.0967C11.3332 14.0967 11.2883 14.1137 11.2527 14.1448L7.67514 18.1127Z"
                fill="#FF9900"
              />
            </svg>
          </NavLink>
          <NavLink to="home">
            <div className=" flex items-center gap-3 gap group cursor-pointer">
              <div className="text-2xl md:text-xl text-[#d7d8db] group-hover:text-[#ff9900] transition-colors duration-200 ">
                <ion-icon name="planet"></ion-icon>
              </div>
              <span className="text-[#d7d8db] leading-[16px] text-lg hidden md:flex mb-1">
                Home
              </span>
            </div>
          </NavLink>

          <NavLink to="explore">
            <div className=" flex items-center gap-3 gap group cursor-pointer">
              <div className="text-2xl md:text-xl text-[#d7d8db] group-hover:text-[#ff9900] transition-colors duration-200 ">
                <ion-icon name="eye"></ion-icon>
              </div>
              <span className="text-[#d7d8db] leading-[16px] text-lg hidden md:flex mb-1">
                Explore
              </span>
            </div>
          </NavLink>

          <NavLink to="notifications">
            <div className=" flex items-center gap-3 gap group cursor-pointer">
              <div className="text-2xl md:text-xl text-[#d7d8db] group-hover:text-[#ff9900] transition-colors duration-200 ">
                <ion-icon name="notifications"></ion-icon>
              </div>
              <span className="text-[#d7d8db] leading-[16px] text-lg hidden md:flex mb-1">
                Notifications
              </span>
            </div>
          </NavLink>

          <NavLink to="news">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="text-2xl md:text-xl text-[#d7d8db] group-hover:text-[#ff9900] transition-colors duration-200">
                <ion-icon name="newspaper"></ion-icon>
              </div>
              <span className="text-[#d7d8db] leading-[16px] text-lg hidden md:flex mb-1">
                News
              </span>
            </div>
          </NavLink>
        </div>

        <div className=" flex items-center gap-3 gap ">
          <div className="rounded-full w-8 h-8 border bg-[#d7d8db]"></div>
          <div>
            <span className="text-[#d7d8db] leading-[16px] text-sm  font-normal hidden md:flex">
              Omar Abdulrazzaq
            </span>
            <span className="text-[#36393c] leading-[16px] text-sm  font-semibold hidden md:flex lowercase">
              @omaraldulymi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
