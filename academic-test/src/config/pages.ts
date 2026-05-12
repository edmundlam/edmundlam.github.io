import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Notes and writing.",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Research papers and articles.",
        isActive: false,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Presentations and talks.",
        isActive: false,
    },
    projects: {
        title: "Code & Projects",
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
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Professional history.",
        isActive: false,
    },
};
