import Socials from "@/components/Shared/Socials";
import NextImage from "next/image";
import AvatarJPG from "public/static/images/avatar.jpg";

const Hero = (): JSX.Element => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between md:space-y-0">
      <div className="mt-8 flex flex-col justify-center space-y-4 md:mt-0 md:w-2/3">
        <h1 className="will-change-opacity text-5xl font-bold will-change-transform">
          Ayush Dhiman
        </h1>
        <h2 className="will-change-opacity text-lg font-medium text-gray-400 will-change-transform">
          Full Stack Developer • Web3 Enthusiast •
          Tech Enthusiast
        </h2>
        <p className="text-md will-change-opacity text-lg text-gray-300 will-change-transform">
          I am a fullstack developer, and currently in my final year UG @ IIT Roorkee. I am looking into learning new
          things (Rust, Go, Web3 and backend technologies). 
        </p>
        <Socials className="!mt-12" />
      </div>
      <div className="will-change-opacity relative h-32 w-32 overflow-hidden rounded-full will-change-transform">
        <NextImage
          src={AvatarJPG}
          layout="fill"
          placeholder="blur"
          alt="Anish De"
        />
      </div>
    </div>
  );
};

export default Hero;
