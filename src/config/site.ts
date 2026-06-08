import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://edmundlam.github.io/",
    author: "Edmund Lam",
    desc: "Personal portfolio of Edmund Lam, a staff software developer in Montreal focused on backend services, AI-powered features, and cloud architecture.",
    title: "Edmund Lam",
    ogImage: "images/edmund_lam.webp",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: false,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "a1be0c78-139e-413a-bb3c-e28b3b9dbe5c",
    src: "https://umami-taupe-gamma.vercel.app/script.js",
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
