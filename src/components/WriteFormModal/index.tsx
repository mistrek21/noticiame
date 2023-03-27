import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "~/context/GlobalContextProvider";
import Modal from "../Modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type WriteFormTypes = {
  title: string;
  description: string;
  body: string;
};

const writeFormSchema = z.object({
  title: z.string().min(10),
  description: z.string().min(60),
  body: z.string().min(100),
});

export const WriteFormModal = () => {
  const { isWrittenModal, setIsWrittenModal } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WriteFormTypes>({
    resolver: zodResolver(writeFormSchema),
  });

  const onSubmit = (data: WriteFormTypes) => console.log(data);

  return (
    <div>
      <Modal isOpen={isWrittenModal} onClose={() => setIsWrittenModal(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            type="text"
            id="title"
            className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
            placeholder="title"
            {...register("title")}
          />
          <p className="w-full text-left text-sm text-red-500">
            {errors.title?.message}
          </p>
          <input
            type="text"
            id="shortDescription"
            className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
            placeholder="short description"
            {...register("description")}
          />
          <p className="w-full text-left text-sm text-red-500">
            {errors.description?.message}
          </p>

          <textarea
            id="mainBody"
            cols={10}
            rows={10}
            className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
            placeholder="writte whatever you want!"
            {...register("body")}
          />
          <p className="w-full text-left text-sm text-red-500">
            {errors.body?.message}
          </p>
          <div className="flex w-full justify-end">
            <button
              onClick={() => setIsWrittenModal(true)}
              className="flex items-center space-x-2 rounded-full border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900 "
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
