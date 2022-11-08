import Pokelist from "./Pokelist/Pokelist";
import { SearchInput } from "./style";

export default function Content() {
    return(
        <>
        <SearchInput placeholder="Cari Monster!" type="text" className="form-control w-25 mx-auto"   />
      <Pokelist/>
        </>
    );
}