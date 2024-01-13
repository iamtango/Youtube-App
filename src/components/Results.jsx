import React, { useEffect, useState } from "react";
import { SEARCH_RESULT_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";

const Results = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  console.log(searchParams.get("search_query"));
  useEffect(() => {
    getSearchResults();
  }, [searchParams.get("search_query")]);

  const getSearchResults = async () => {
    const data = await fetch(
      SEARCH_RESULT_API + searchParams.get("search_query")
    );
    const json = await data.json();
    // console.log(json.items);
    setResults(json.items);
  };

  return (
    <div className="ml-[210px]">
      {results.map((r, index) => (
        <Link
          key={index}
          to={"/watch?v=" + r.id.videoId + "&sq_ch=" + r.snippet.channelId}>
          <ResultCard info={r} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
