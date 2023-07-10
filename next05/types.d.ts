type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

//검색할 때의 타입
type SearchResult = {
    query?: {
        pages?: Result[],
    }
}