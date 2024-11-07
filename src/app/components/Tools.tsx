import Image from "next/image";

interface ImageLogoProps {
  src: string;
  alt: string;
}

const ImageLogo = ({src, alt}: ImageLogoProps) => {
  return <Image className="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src={src} alt={alt} width="158" height="48" />
}

const Tools = () => {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">This project was built with</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <ImageLogo src="/images/nextjs.png" alt="NextJS" />
          <ImageLogo src="/images/vitest.svg" alt="Vitest" />
          <ImageLogo src="/images/tailwind-css.svg" alt="Tailwind CSS" />
        </div>
      </div>
    </div>
  );
}

export default Tools;