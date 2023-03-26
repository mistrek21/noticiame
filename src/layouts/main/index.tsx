import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: sessionData, status } = useSession();

  console.log(sessionData);

  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-24 w-full flex-row items-center justify-around border border-gray-200 bg-gray-100 ">
        <div className="ml-10 flex items-center space-x-4">
          <IoReorderThreeOutline className="text-2xl" />
        </div>

        <div className="text-2xl font-bold">Meneame</div>

        {status === "authenticated" ? (
          <div className="mr-10 flex items-center space-x-2">
            <div>
              <div>
                <BsBell className="text-2xl" />
              </div>
            </div>

            <div>
              <div className="h-5 w-5 rounded-full bg-gray-600" />
            </div>

            <div>
              <button className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900 ">
                <div>Write</div>
                <div>
                  <FiEdit className="text-2xl" />
                </div>
              </button>
            </div>
            <div>
              <button onClick={() => signOut()}>Log out</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={() => signIn()}>Log in</button>
          </div>
        )}
      </header>
      {children}
    </div>
  );
};

export default MainLayout;
