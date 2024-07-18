import Image from "next/image";
import profile from "@/assets/profile.jpg";

export default function HeroBanner() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center px-4 text-center sm:px-10 lg:flex-row lg:justify-between lg:text-left">
      <div className="mb-6 lg:mb-0 lg:mr-1">
        <h1 className="mb-2 text-3xl font-bold text-teal-600 sm:text-4xl ">
          Hey, I am Nick Don!
        </h1>
        <p className="primary-text mb-3 lg:mr-4">
          Welcome! I'm a full-stack developer based in Melbourne, Australia. I
          am driven by the goal of developing high-quality code that leads to
          high-quality products.
        </p>
        <p className="primary-text mt-3">
          I am currently looking for full-time full-stack/back-end/front-end
          roles within Australia.
        </p>
      </div>

      <Image
        className="w-3/5 rounded-full sm:w-2/5 lg:w-1/4"
        src={profile}
        alt="Nick Don"
      />
    </div>
  );
}
