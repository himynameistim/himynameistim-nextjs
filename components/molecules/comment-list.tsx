import { CommentModel } from "@Models/Comment";
import Comment from "../atoms/comment";

export default function CommentList({
  comments,
}: {
  comments: CommentModel[];
}) {
  return (
    <>
      {comments.length > 0 &&
        comments.map((c) => {
          return <Comment comment={c}></Comment>;
        })}
    </>
  );
}
