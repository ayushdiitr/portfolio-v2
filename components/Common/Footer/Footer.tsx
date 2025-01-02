import Link from "@/components/Shared/Link";
import Socials from "@/components/Shared/Socials";

const Footer = (): JSX.Element => {
  return (
    <footer className="mx-auto mb-4 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
      <Socials small className="mb-8" />
      {/* <p>
        Made by <Link href="https://twitter.com/AnishDe12020">Anish De</Link>
      </p> */}
      <p>
        Inspired from{" "}
        <Link href="https://github.com/AnishDe12020/portfolio">Anish De`s</Link>{" "}portfolio
      </p>
    </footer>
  );
};

export default Footer;
