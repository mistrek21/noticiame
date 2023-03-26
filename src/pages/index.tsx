import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen w-full flex-col">
        {/* Header  */}
        <header className="flex h-20 w-full flex-row items-center justify-between border border-gray-200 bg-gray-100 ">
          <div className="ml-10 flex items-center space-x-4">
            <IoReorderThreeOutline className="text-2xl" />
            <input
              placeholder="busca algo"
              className="w-96 rounded-full pl-2 outline-none first-letter:capitalize"
            />
          </div>

          <div className="mr-60 text-2xl font-bold">Meneame</div>

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
          </div>
        </header>

        {/* Main Screen  */}
        <section className="grid h-full w-full grid-cols-12 place-items-center ">
          <main className="col-span-8 h-full w-full space-y-4 border border-r border-gray-200 p-10">
            <div className="space-y-8 ">
              <div className="flex w-full flex-col ">
                <div className="flex w-full items-center space-x-4">
                  <label
                    htmlFor="search"
                    className="relative w-full rounded-lg border border-gray-900"
                  >
                    <div className="absolute right-2 flex h-full items-center">
                      <CiSearch />
                    </div>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="w-full rounded-lg py-2 px-4 pl-2 text-sm outline-none placeholder:text-gray-300"
                      placeholder="Search..."
                    />
                  </label>

                  <div className="flex w-full items-center justify-end space-x-4">
                    <div>My topics</div>
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-3xl bg-gray-200/50 py-3 px-4"
                        >
                          tag {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full items-center justify-between ">
                <div>Articles</div>
                <button className="flex items-center space-x-2 rounded-full border border-gray-800 p-5 py-2 font-semibold">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="border-gray-300 text-xl" />
                  </div>
                </button>
              </div>
              <div className="border border-b border-gray-300 " />
            </div>
          </main>

          <aside className="col-span-4 h-full w-full">
            this is the sidebar
          </aside>
        </section>
      </div>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
