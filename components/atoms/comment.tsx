import { CommentModel } from "@Models/Comment";
import { format } from "date-fns";

export default function Comment({ comment }: { comment: CommentModel }) {
  return (
    <div>
      <b>{comment.name} </b>
      <time dateTime={comment.created_at.toString()}>
        {format(comment.created_at, "d LLLL yyyy")}
      </time>
      <div>{comment.text}</div>
    </div>
  );
}
