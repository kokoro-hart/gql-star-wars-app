"use client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
