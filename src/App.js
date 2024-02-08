import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FormattedMessage } from "react-intl";

import { IntlProvider } from "react-intl";
import Russian from "./lang/ru.json";
import English from "./lang/en.json";


function App() {
  const [locale, setLocale] = useState("en");

  // TODO: switch-case
  let lang;
  if (locale === "ru") {
    lang = Russian;
  } else {
    lang = English;
  }

  return (
    <IntlProvider locale={locale} messages={lang}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage id="app.header" />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="app.content" />
          </a>
          <FormattedMessage id="app.channel.plug" />

          <select value={locale} onChange={(e) => setLocale(e.target.value)}>
            <option value="ru" selected={locale === 'ru'}>Russian</option>
            <option value="en" selected={locale === 'en'}>English</option>
          </select>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
