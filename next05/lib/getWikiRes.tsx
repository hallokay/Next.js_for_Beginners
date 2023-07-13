export default async function getWikiResults(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query", // API에게 수행할 동작을 지정. "query"는 데이터를 검색하고 추출하는 동작을 의미
    generator: "search", //검색 결과를 생성하는 동작을 지정. "search"는 검색 결과를 생성하기 위한 제너레이터(generator)를 사용하라는 의미 
    gsrsearch: searchTerm, //검색어로 사용될 변수. searchTerm 변수에 저장된 값을 사용하여 Wikipedia에서 검색할 키워드를 지정.
    gsrlimit: "20", //가져올 검색 결과의 제한 수를 설정. 이 경우 최대 20개의 결과를 가져오도록 지정
    prop: "pageimages|extracts", //반환된 페이지에 포함할 속성을 지정. "pageimages"는 페이지 이미지에 대한 정보를 가져오라는 의미이고, "extracts"는 페이지의 요약 정보를 가져오라는 의미
    exchars: "100", // 페이지 요약 정보의 최대 글자 수를 설정. 이 경우 100글자로 제한
    exintro: "true", // 페이지 요약 정보가 페이지의 소개 부분에 대한 것임
    explaintext: "true", // 페이지 요약 정보를 텍스트 형식으로 가져오라는 의미
    exlimit: "max", // 페이지 요약 정보를 최대한으로 가져오라는 의미
    format: "json", // 반환되는 데이터의 형식을 지정. 이 경우 JSON 형식으로 데이터를 반환하도록 지정.
    origin: "*", // API 호출의 출처를 나타냄. "*"는 모든 출처를 허용한다는 의미
  });

  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?${searchParams.toString()}`
  );

  return response.json();
}
