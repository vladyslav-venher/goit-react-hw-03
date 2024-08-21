import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label className={css.search}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="text"
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}
