import CommentForm from "components/atoms/comment-form";
import CommentList from "./comment-list";
import useComments from "@src/hooks/useComments";

export default function Comments() {
  const { comments, saveComment } = useComments();

  return (
    <>
      <CommentForm authenticated={true} handleSubmit={saveComment} />
      {comments && <CommentList comments={comments}></CommentList>}
    </>
  );
}
