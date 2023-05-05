export interface CommentModel {
  id: string;
  relatedPostUid: string;
  text: string;
  name: string;
  created_at: number;
  image: string | null | undefined;
}
