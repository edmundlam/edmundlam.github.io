import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        navTitle: "About",
        href: "/",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Notes and writing.",
        isActive: true,
        href: "/posts",
    },
    publications: {
        title: "Publications",
        subtitle: "Research papers and articles.",
        isActive: false,
    },
    talks: {
        title: "Talks & Presentations",
        navTitle: "Talks",
        href: "/talks",
        subtitle: "Presentations and talks.",
        isActive: true,
    },
    projects: {
        title: "Code & Projects",
        navTitle: "Projects",
        href: "/projects",
        subtitle: "Selected projects and experiments.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Courses and educational materials.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        href: "/tags",
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    cv: {
        title: "Curriculum Vitae",
        navTitle: "CV",
        href: "/cv",
        subtitle: "Professional history.",
        isActive: true,
    },
};
