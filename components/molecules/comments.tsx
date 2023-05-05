import CommentForm from "components/atoms/comment-form";
import CommentList from "./comment-list";
import { CommentModel } from "@Models/Comment";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState<CommentModel[]>([]);

  const getComments = () => {
    fetch(`/api/comments`, {
      method: "GET",
    }).then((value: Response) => {
      setComments(value.json);
    });
  };

  const saveComment = (commentText: string) => {
    fetch(`/api/comments`, {
      method: "POST",
      body: commentText,
    });
  };

  return (
    <>
      <CommentForm authenticated={true} />
      <CommentList comments={comments}></CommentList>
    </>
  );
}
