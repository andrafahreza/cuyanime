import AnimeList from "@//components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
    <>
      {/* Anime  Terpopuler */}
      <section>
        <Header
          title={`Pencarian Untuk ${decodeKeyword}`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
