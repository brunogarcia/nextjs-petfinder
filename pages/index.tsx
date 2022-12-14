import { NextPage, GetStaticProps } from "next";
import { getPlaiceholder } from "plaiceholder";
import { ANIMAL_TYPES } from "../enums";
import { AnimalType } from "../shared/interfaces/petfinder.interface";
import TypeCardsGrid from "../components/TypeCardsGrid";

export interface HomePageProps {
  types: AnimalType[];
}

const {
  NEXT_PUBLIC_PETFINDER_API_URL,
  NEXT_PUBLIC_PETFINDER_CLIENT_ID,
  NEXT_PUBLIC_PETFINDER_CLIENT_SECRET,
} = process.env;

const mapAnimalTypesData = async (types: AnimalType[]) => {
  return await Promise.all(
    types.map(async (type) => {
      const { blurhash, img } = await getPlaiceholder(
        ANIMAL_TYPES[type.name].image.url
      );

      return {
        ...type,
        id: type._links.self.href.match(/\/types\/([\w-]+)$/)[1],
        blurhash,
        img: {
          src: img.src,
          objectPosition:
            ANIMAL_TYPES[type.name].image.styles?.objectPosition ||
            "center",
        },
      };
    })
  );
}

const getAuth = async () => {
  const url = `${NEXT_PUBLIC_PETFINDER_API_URL}/oauth2/token`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: NEXT_PUBLIC_PETFINDER_CLIENT_ID,
      client_secret: NEXT_PUBLIC_PETFINDER_CLIENT_SECRET,
    }),
  };

  return await (
    await fetch(url, options)
  ).json()
}

const getAnimalTypes = async (accessToken: string) => {
  const url = `${NEXT_PUBLIC_PETFINDER_API_URL}/types`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return await (
    await fetch(url, options)
  ).json();
}

export const getStaticProps: GetStaticProps = async () => {
  let types = [];

  try {
    const { access_token } = await getAuth();
    ({ types } = await getAnimalTypes(access_token));
    if (types.length > 0) {
      types = await mapAnimalTypesData(types);
    }
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      types,
    },
  };
};

const HomePage: NextPage<HomePageProps> = ({ types = [] }) => (
  <section>
    <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800 sm:text-8xl lg:text-9xl">
      Petfinder
    </h1>
    <p className="mt-7 mb-7 text-2xl text-gray-400">
      Explore the Petfinder API and help pets find good homes.
    </p>
    {types.length > 0 && <TypeCardsGrid types={types} />}
  </section>
);

export default HomePage;
