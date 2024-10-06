import "./App.scss";

const App = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>
          </div>
          <div className="control">
            <input
              type="text"
              name="search-query"
              id="search-query"
              placeholder="Place name of the movie"
            />
          </div>
        </div>
        content
      </div>

      <div className="sidebar">sidebar is here</div>
      <div className="sidebar">sidebar is here</div>
      <div className="sidebar">sidebar is here</div>
    </div>
  );
};

export default App;
