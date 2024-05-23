import { getAllGalery } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";

export async function getData() {
  return await getAllGalery();
}

async function Page() {
  const data = await getData();

  const urlGambar = data.map(photo => {
    return {
      src: urlForImage(photo.image).src,
      alt: photo.alt,
      height: urlForImage(photo.image).height,
      width: urlForImage(photo.image).width
    };
  });

  console.log(urlGambar);

  return (
    <div className="flex w-full items-center justify-center p-10">
      <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {urlGambar.map((photo, index) => (
          <div key={index}>
            <Image
              src={photo}
              alt="s"
              height={photo.height}
              width={photo.width}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
