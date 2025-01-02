import { ReactNode } from "react";

import {
  LinkedinLogo,
  GitHubLogo,
  Twitterlogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://x.com/Ayushd175",
    icon: <Twitterlogo color="#1DA1F2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/ayushdiitr",
    icon: <GitHubLogo />,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ayush-dhiman-8302b4227/",
    icon: <LinkedinLogo color="#ff0000" />,
  },
  // {
  //   id: "hashnode",
  //   name: "Hashnode",
  //   url: "https://hashnode.com/@anishde12020",
  //   icon: <HashnodeLogo color="#2962ff" />,
  // },
  // {
  //   id: "dev.to",
  //   name: "Dev.to",
  //   url: "https://dev.to/anishde12020",
  //   icon: <DevToLogo color="#f0f0f0" />,
  // },
];

export default socials;
