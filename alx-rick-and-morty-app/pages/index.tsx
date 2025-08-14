
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";

export default function Home() {
  
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 }, // Fetch first page
  });

  if (loading) return <p>Loading episodes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Rick and Morty Episodes</h1>
      <ul className="space-y-4">
        {data.episodes.results.map((episode: any) => (
          <li
            key={episode.id}
            className="p-4 border rounded-lg shadow hover:bg-gray-100 transition"
          >
            <p className="font-semibold">{episode.name}</p>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode Code: {episode.episode}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        Page {data.episodes.info.prev ? data.episodes.info.prev + 1 : 1} of{" "}
        {data.episodes.info.pages}
      </p>
    </div>
  );
}
