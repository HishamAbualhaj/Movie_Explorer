import ShowOpenPage from "@/components/layouts/MoviePage/ShowOpenPage";
import { ShowPageProps } from "@/types/movie";

export default function ShowPage({ params }: ShowPageProps) {
  const isSubscribed = true;

  return <ShowOpenPage isSubscribed={isSubscribed} />;
}
