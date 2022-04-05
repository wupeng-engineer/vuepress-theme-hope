import { defineSidebarConfig } from "vuepress-theme-hope";

export const enSidebarConfig = defineSidebarConfig({
  "/guide/": [
    {
      text: "Get Started",
      icon: "creative",
      prefix: "get-started/",
      collapsable: true,
      children: ["intro", "install", "markdown"],
    },
    {
      text: "Interface",
      icon: "palette",
      prefix: "interface/",
      collapsable: true,
      children: [
        "darkmode",
        "theme-color",
        "icon",
        "code-theme",
        "accessibility",
        "pure",
        "others",
      ],
    },
    {
      text: "Layout",
      icon: "layout",
      prefix: "layout/",
      collapsable: true,
      children: [
        "navbar",
        "sidebar",
        "page",
        "breadcrumb",
        "footer",
        "home",
        "slides",
      ],
    },
    {
      text: "Markdown enhance",
      icon: "markdown",
      prefix: "markdown/",
      collapsable: true,
      children: [
        "intro",
        "container",
        "components",
        "code-group",
        "align",
        "sup-sub",
        "footnote",
        "mark",
        "tasklist",
        "tex",
        "flowchart",
        "mermaid",
        "demo",
        "presentation",
        "others",
        "external",
      ],
    },
    {
      text: "Features",
      icon: "discover",
      prefix: "feature/",
      collapsable: true,
      children: [
        "page-info",
        "comment",
        "copy-code",
        "photo-swipe",
        "meta",
        "search",
        "copyright",
        "encrypt",
      ],
    },
    {
      text: "Blog",
      icon: "blog",
      prefix: "blog/",
      collapsable: true,
      children: [
        "intro",
        "blogger",
        "article",
        "category-and-tags",
        "timeline",
        "home",
      ],
    },
    {
      text: "Advanced",
      icon: "advance",
      prefix: "advanced/",
      collapsable: true,
      children: ["pwa", "feed", "seo", "sitemap"],
    },
  ],

  "/config/": [
    "intro",
    "i18n",
    {
      text: "Theme Config",
      icon: "config",
      prefix: "theme/",
      children: ["", "basic", "feature", "layout", "apperance"],
    },
    {
      text: "Plugin Config",
      icon: "plugin",
      prefix: "plugins/",
      children: [
        "intro",
        "blog",
        "comment",
        "feed",
        "md-enhance",
        "pwa",
        "others",
      ],
    },
    "page",
    "style",
  ],

  "/cookbook/": [
    {
      text: "Tutorial",
      icon: "guide",
      prefix: "tutorial/",
      children: [
        "env",
        "create",
        "command",
        "content",
        "config",
        "structure",
        "deploy",
      ],
    },
    {
      text: "Markdown",
      icon: "markdown",
      prefix: "markdown/",
      collapsable: true,
      children: [
        "",
        "demo",
        {
          text: "Emoji",
          icon: "emoji",
          link: "emoji/",
          prefix: "emoji/",
          collapsable: true,
          children: ["people", "nature", "object", "place", "symbol"],
        },
      ],
    },
    {
      text: "VuePress",
      icon: "vue",
      prefix: "vuepress/",
      collapsable: true,
      children: ["", "page", "markdown", "file", "config", "plugin", "theme"],
    },
    {
      text: "Advanced",
      icon: "advance",
      prefix: "advanced/",
      collapsable: true,
      children: ["component", "style", "replace", "extend"],
    },
  ],

  "/": [
    "",
    {
      text: "Guide",
      icon: "creative",
      prefix: "guide/",
      children: [
        "get-started/",
        "interface/",
        "layout/",
        "markdown/",
        "feature/",
        "blog/",
        "advanced/",
      ],
    },
    {
      text: "Config",
      icon: "config",
      prefix: "config/",
      children: ["intro", "i18n", "theme/", "plugins/", "page", "style"],
    },
    {
      text: "Cookbook",
      icon: "guide",
      prefix: "cookbook/",
      children: ["tutorial/", "markdown/", "vuepress/", "advanced/"],
    },
    {
      text: "Migration",
      icon: "change",
      prefix: "migration",
      children: ["config", "page", "style"],
    },
    "changelog",
    "faq",
    "demo",
    "contribution",
  ],
});
