import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Veekee James Fashion Academy",
    short_name: "Veekee James",
    description:
      "Luxury fashion education from an award-winning house in Lagos, Nigeria.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1e8df",
    theme_color: "#5e1f2a",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
