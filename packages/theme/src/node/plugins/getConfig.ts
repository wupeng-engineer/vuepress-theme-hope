import { components } from "@mr-hope/vuepress-plugin-components";
import { blog } from "vuepress-plugin-blog2";
import { comment } from "vuepress-plugin-comment2";
import { copyCode } from "vuepress-plugin-copy-code2";
import { feed } from "vuepress-plugin-feed2";
import { mdEnhance } from "vuepress-plugin-md-enhance";
import { photoSwipe } from "vuepress-plugin-photo-swipe";
import { pwa } from "vuepress-plugin-pwa2";
import { seo } from "vuepress-plugin-seo2";
import { sitemap } from "vuepress-plugin-sitemap2";

import { resolveActiveHeaderLinksOptions } from "./activeHeaderLinks";
import { resolveBlogOptions } from "./blog";
import { resolveCommentOptions } from "./comment";
import { resolveComponentsOptions } from "./components";
import { resolveCopyCodeOptions } from "./copyCode";
import { resolveFeedOptions } from "./feed";
import { resolveMdEnhanceOptions } from "./mdEnhance";
import { resolvePhotoSwipeOptions } from "./photoSwipe";
import { resolvePWAOptions } from "./pwa";
import { resolveSitemapOptions } from "./sitemap";

import type { PluginConfig, PluginOptions } from "@vuepress/core";
import type { HopeThemeConfig, HopeThemePluginsOptions } from "../../shared";
import { resolveSEOOptions } from "./seo";

export const getPluginConfig = (
  plugins: HopeThemePluginsOptions,
  themeData: HopeThemeConfig
): PluginConfig<PluginOptions>[] => [
  components(resolveComponentsOptions(themeData)),
  [
    "@vuepress/active-header-links",
    resolveActiveHeaderLinksOptions(plugins.activeHeaderLinks),
  ],
  ["@vuepress/nprogress", plugins.nprogress !== false],
  ["@vuepress/prismjs", plugins.prismjs !== false],
  ["@vuepress/theme-data", { themeData }],
  blog(resolveBlogOptions(themeData)),
  comment(resolveCommentOptions(plugins.comment)),
  copyCode(resolveCopyCodeOptions(plugins.copyCode)),
  feed(resolveFeedOptions(themeData, plugins.feed)),
  mdEnhance(resolveMdEnhanceOptions(plugins.mdEnhance)),
  photoSwipe(resolvePhotoSwipeOptions(plugins.photoSwipe)),
  pwa(resolvePWAOptions(plugins.pwa)),
  seo(resolveSEOOptions(themeData, plugins.seo)),
  sitemap(resolveSitemapOptions(themeData, plugins.sitemap)),
];
