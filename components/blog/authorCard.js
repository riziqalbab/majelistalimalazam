import Image from "next/image";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import Link from "next/link";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? urlForImage(author.image) : null;
  return (
    <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
          {imageProps && (
            <Image
              src={imageProps.src}
              alt={author.name}
              className="rounded-full object-cover"
              fill
              sizes="96px"
            />
          )}
        </div>
      </div>
    </div>
  );
}