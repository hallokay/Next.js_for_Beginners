import React from "react";
import getWikiRes from "@/lib/getWikiRes";

import Item from "./componets/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};
export async function generateMetadata({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiRes(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data) {
    return {
      title: `${displayTerm}을 찾을 수 없습니다.`,
    };
  }

  return {
    title: displayTerm,
    description: `${displayTerm}에 대한 결과입니다.`
  }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiRes(searchTerm);
  const data = await wikiData;

  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((val) => {
          return <Item key={val.pageid} result={val} />;
        })
      ) : (
        <h2>{`${searchTerm}에 대한 결과가 없습니다.`}</h2>
      )}
    </main>
  );
  return content;
}
