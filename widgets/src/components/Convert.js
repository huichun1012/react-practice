import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import GoogleTranslateApi from "../apis/GoogleTranslateApi";

const Convert = ({ language, text }) => {
  const [translation, setTranslation] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await GoogleTranslateApi.post("", "", {
        params: {
          q: debouncedText,
          target: language.value,
        },
      });

      setTranslation(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translation}</h1>
    </div>
  );
};

export default Convert;
