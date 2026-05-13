import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://edmundlam.github.io/",
    author: "Edmund Lam",
    desc: "Personal portfolio of Edmund Lam, a staff software developer in Montreal focused on backend services, cloud architecture, and data-oriented systems.",
    title: "Edmund Lam",
    ogImage: "images/placeholder.svg",
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
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
