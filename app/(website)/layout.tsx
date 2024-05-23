import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "MAJELIS TA'LIM AL AZAM | KALIGENDING",
      template: "GendingSoft"
    },
    description:
      settings?.description ||
      "MAJELIS TA'LIM AL AZAM | KALIGENDING",
    keywords: ["majelis", "taklim", "kaligending", "gendingsoft", "gending", "soft", "majelis taklim", "majelis taklim kaligending", "majelis taklim al azam", "majelis taklim al azam kaligending", "majelis taklim al azam kaligending gendingsoft"],
    authors: [{ name: "albabriziq" }],
    canonical: settings?.url,

  }
}
export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
