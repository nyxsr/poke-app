import { useState } from "react";
import Pokelist from "./Pokelist/Pokelist";
import { SearchInput } from "./style";

export default function Content() {
  const [search, setSearch] = useState('');
    return(
        <>
        <SearchInput placeholder="Cari Monster!" type="text" className="form-control w-25 mx-auto" onChange={(e)=> setSearch(e.target.value)} />
      <Pokelist/>
        </>
    );
}