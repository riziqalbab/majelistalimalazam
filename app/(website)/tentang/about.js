import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import imgAbout from "@/assets/img/about.jpg";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        TENTANG KAMI
      </h1>
      <div className="text-center">
        <p className="text-lg"></p>
      </div>
      <Image
        src={imgAbout}
        alt="Foto anak anak"
        className="rounded-3xl shadow-2xl "
      />

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>

        <div className="w-full">
          <iframe
            className="rounded-xl"
            width="100%"
            height="500"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-7.585299966133399,%20109.67726828229983+(Majelis%20Ta'lim%20al%20Azam)&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </Container>
  );
}
