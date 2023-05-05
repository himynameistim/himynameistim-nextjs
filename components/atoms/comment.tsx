import { CommentModel } from "@Models/Comment";
import { format } from "date-fns";

export default function Comment({ comment }: { comment: CommentModel }) {
  return (
    <div>
      <b>{comment.name} </b>
      <time dateTime={comment.postDate.toString()}>
        {format(comment.postDate, "d LLLL yyyy")}
      </time>
      <div>{comment.text}</div>
    </div>
  );
}
