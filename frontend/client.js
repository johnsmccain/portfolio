import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "tz33t44w",
  dataset: "production",
  apiVersion: "2022-02-23",
  useCdn: true,
  token:
    "skn9SCctjhWlekT83pHVihtP5nlhGWvuhrPk1CbOm9MzA5aHm2YqSWk2tntbGPOgWPi9B4HHheCKoNDMiDFiVM6PVhOD9sHOZiarF8K63Djdl6lUy5RGmuPz6VtX0HPKs3087aQZrz4rBSBZxEb6SaunrvrOlFPcgu6omhDMHSK1sVApWVjp",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
