import ShowOpenPage from "@/components/layouts/MoviePage/ShowOpenPage";
import { ShowPageProps } from "@/types/movie";

export default async function ShowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const showId = (await params).id;
  const isSubscribed = true;

  return <ShowOpenPage isSubscribed={isSubscribed} />;
}
