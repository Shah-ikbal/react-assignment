import { useEffect, useState } from "react";
import "./App.css";
import Language from "./Language";

function App() {
  const [languages, setLanguages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://www.mist-one.com/pub/languages")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.rows);
        setLanguages(data.data.rows);
      });
  }, []);

  const searchFunction = () => {
    return languages.filter((language) =>
      language.languageNameEnglish.includes(query)
    );
  };

  const getDataAfterFilter = () => {
    return query !== "" ? searchFunction() : languages;
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="app">
      <input
        className="app__input"
        placeholder="Search..."
        onChange={(e) => handleChange(e)}
      />
      <div className="app__cards">
        {getDataAfterFilter().map((language) => (
          <Language
            key={language.id}
            src={language.image}
            name={language.languageNameEnglish}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
