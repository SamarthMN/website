import { IconName } from '@fortawesome/fontawesome-svg-core';

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Project = {
  name: string;
  description: {
    childMarkdownRemark: {
      rawMarkdownBody: string;
    };
  };
  techStack: string[];
  repository: string;
  type: string;
  startDate: string;
  endDate: string;
  logo: Image;
};

export type AboutMe = {
  markdown: string;
  profile: Image;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName;
};

export type MediumPost = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
};

export type MediumAuthor = {
  id: string;
  name: string;
  username: string;
};

export type Landing = {
  name: string;
  roles: string[];
  socialLinks: SocialLink[];
};

export type Endorsements = {
  author: string;
  endorsement: {
    endorsement: string;
  };
  authorLinkedin: string;
};
