
// ===== src/components/SearchBar.jsx =====
function SearchBar({ query, setQuery }) {
    return (
      <input
        type="text"
        placeholder="Поиск по названию..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  