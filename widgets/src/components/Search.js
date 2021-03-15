import wikiApi from "../apis/WikiApi";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // useEffect to watch term, timer use to update debouncedTerm
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // useEffect to watch debouncedTerm, doing actual search
  useEffect(() => {
    const search = async () => {
      const { data } = await wikiApi.get("", {
        params: {
          srsearch: debouncedTerm,
        },
      });
      if (data.error) {
        setResults([]);
      } else {
        setResults(data.query.search);
      }
    };
    if (debouncedTerm) {
      search();
    } else {
      setResults([]);
    }
  }, [debouncedTerm]);

  const toRenderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://zh.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">{toRenderResults}</div>
    </div>
  );
};

export default Search;
