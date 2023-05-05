import { CommentModel } from "@Models/Comment";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useComments() {
  const { data, error, isLoading, mutate } = useSWR<CommentModel[]>(
    "/api/comments",
    fetcher
  );

  const saveComment = async (commentText: string) => {
    await fetch(`/api/comments`, {
      method: "POST",
      body: commentText,
    });
    await mutate();
  };

  return { comments: data, error, isLoading, saveComment };
}

export default useComments;
