"use client";

import dynamic from "next/dynamic";

export const DynamicToaster = dynamic(() => import("sonner").then((mod) => mod.Toaster), {
  loading: () => null,
  ssr: false,
  loadableGenerated: {
    webpack: () => [() => import("sonner")],
  },
});
