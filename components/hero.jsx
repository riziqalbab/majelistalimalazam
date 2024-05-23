import Image from "next/image";
import main1Image from "../assets/img/main1.jpg";
import main2Image from "../assets/img/main2.jpg";
import main3Image from "../assets/img/main3.jpg";
import main4Image from "../assets/img/main4.jpg";
import { Scheherazade_New } from "next/font/google";

const scheherazade_New = Scheherazade_New({
  subsets: ["arabic"],
  variable: "--font-arab",
  weight: "400",
  style: "normal"
});
function Hero() {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-green-200 p-10">
      <div className="max-w-4xl text-center text-2xl">
        <h1 className="text mb-5 font-bold">
          MAJELIS TA{"'"}LIM AL-AZAM
        </h1>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <Image
              alt="gambar"
              src={main4Image}
              className="h-80 w-full rounded-3xl object-cover xl:h-96"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image
              alt="gambar"
              src={main2Image}
              className="h-80 w-full rounded-3xl object-cover xl:h-96"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <Image
              alt="gambar"
              src={main3Image}
              className="h-80 w-full rounded-3xl object-cover xl:h-96"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <Image
              alt="gambar"
              src={main4Image}
              className="h-80 w-full rounded-3xl object-cover xl:h-96"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-white p-5 text-center">
        <p className={scheherazade_New.variable + "text-xl"}>
          <span className="text-2xl">
            {" "}
            ٱقْرَأْ بِٱسْمِ رَبِّكَ ٱلَّذِى خَلَقَ
          </span>
        </p>
        <p>
          Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan,
        </p>
      </div>
      <p className="text-center">
        Mencari ilmu adalah kewajiban bagi setiap insan, dari buaian
        hingga liang lahat
      </p>
    </div>
  );
}

export default Hero;
