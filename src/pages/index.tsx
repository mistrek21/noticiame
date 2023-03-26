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

      <div className="flex h-full w-full flex-col">
        {/* Header  */}
        <header className="flex h-24 w-full flex-row items-center justify-between border border-gray-200 bg-gray-100 ">
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
            {/* Were we build all the articles */}
            <section className="py-8">
              <div className="flex w-full flex-col justify-center space-y-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col space-y-8 border-b border-gray-300 border-t-transparent border-r-transparent border-l-transparent py-4 last:border-none"
                  >
                    <div className="grid h-44 w-full grid-cols-12 gap-4">
                      {/* Texto  */}
                      <div className="col-span-8 flex flex-col space-y-4 ">
                        <p className="text-3xl font-bold text-gray-800">
                          Title
                        </p>
                        <p className=" break-words text-sm text-gray-300 ">
                          TextttttttTextttttttTextttttttTextttttttTexttttttttttttmgsmfisfiposdfiojabyadiuosjdioaidJAPON
                          clarokmskdmaklmdkalmk
                          TextttttttTextttttttTextttttttTextttttttTextttttttTexttttttt
                          TextttttttTextttttttTextttttttTextttttttTextttttttTextttttttTextttttttT
                          extttttttTextttttttTextttttttTextttttttTextttttttTexttttttt
                        </p>
                      </div>
                      {/* Image  */}
                      <div className="col-span-4">
                        <div className="h-full w-full transform rounded-xl bg-gray-500 transition duration-300 hover:scale-105 hover:shadow-lg"></div>
                      </div>
                    </div>

                    {/* Tags  */}
                    <div>
                      <div className="flex w-full items-center justify-start space-x-4">
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
                ))}
              </div>
            </section>
          </main>

          {/* Side Bar */}
          <aside className="sticky top-36 col-span-4 flex h-full w-full flex-col space-y-10 p-10">
            <div className="space-y-3">
              <h3 className="font-semibold">People</h3>
              <div className="flex flex-col space-y-4"></div>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center justify-between space-x-4"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        Name
                      </div>
                      <div className="text-xs">dklasldkalskd;laskld;kas;l</div>
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center space-x-2 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900 ">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Reading</h3>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="group flex items-center space-x-6">
                    <div className="aspect-square h-full w-2/5 rounded-xl bg-gray-300"></div>
                    <div className="flex w-3/5 flex-col space-y-2 ">
                      <div className="group-hover:underline">
                        kdmalsmdklmaskdmklamskld
                      </div>
                      <div>dlkmaskdmklas</div>
                      <div className="flex w-full items-center space-x-4 ">
                        <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                        <div>Ramon</div>
                        <div>13-2-2008</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
