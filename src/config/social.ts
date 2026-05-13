import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/edmundlam",
        linkTitle: `Follow Edmund Lam on Github`,
        isActive: true,
    },
    {
        name: "Bluesky",
        href: "https://bsky.app/profile/edmundlam.bsky.social",
        linkTitle: `Follow Edmund Lam on Bluesky`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "",
        linkTitle: `Send an email to Edmund Lam`,
        isActive: false,
    },
    {
        name: "Google Scholar",
        href: "",
        linkTitle: `Edmund Lam on Google Scholar`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "",
        linkTitle: `Edmund Lam on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/edmundlam",
        linkTitle: `Edmund Lam on LinkedIn`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    Bluesky: "Bluesky",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
