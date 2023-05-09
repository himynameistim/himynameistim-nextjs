import { CommentFormWithHooks } from "components/atoms/comment-form";
import CommentList from "./comment-list";
import useComments from "@src/hooks/useComments";

export default function Comments() {
  const { comments, saveComment } = useComments();

  return (
    <div className="comments">
      <h3>Comments</h3>
      <CommentFormWithHooks handleSubmit={saveComment} />
      {comments && <CommentList comments={comments}></CommentList>}
    </div>
  );
}
