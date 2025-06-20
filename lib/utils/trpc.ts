import superjson from "superjson";

import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server/routers/_app";

const APIURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5700";

export const TRPC = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = TRPC.createClient({
  links: [httpBatchLink({ url: `${APIURL}/api/v1`, transformer: superjson })],
});
