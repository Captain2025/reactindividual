
// ===== src/components/FilterBar.jsx =====
function FilterBar({ genre, setGenre }) {
    return (
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">Все жанры</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Детектив">Детектив</option>
        <option value="История">История</option>
      </select>
    );
  }
  
  export default FilterBar;
  