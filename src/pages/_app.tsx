import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "@/lib/query-client";
import Layout from "@/components/layout";
import React from "react";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const LayoutNotNeeded = appProps.router.pathname.includes(`/auth`);
  const LayoutComponent = LayoutNotNeeded ? React.Fragment : Layout;

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>

        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
