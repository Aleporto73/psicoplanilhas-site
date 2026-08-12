import type { MetadataRoute } from "next";

const BASE_URL = "https://psicoplanilha.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/corrigefacil`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ajuda`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/mentoria`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}