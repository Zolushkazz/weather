import { CiSearch } from "react-icons/ci";

export const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex gap-2 items-center border-2 rounded-3xl py-2 px-2 w-96 bg-white">
      <CiSearch
        className="w-8 h-7 color-slate-200"
        style={{ color: "lightgray" }}
      />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{ fontSize: "24px", outline: "none", color: "gray" }}
      />
    </div>
  );
};
