import Logo from "../../Assets/Img/312652963_10229249601409687_8445930717822138939_n-removebg-preview.png";
import { WrapperHeader } from "../style";

export default function Header() {
  return (
    <WrapperHeader className="container">
      <div className="row mt-5">
        <img src={Logo} alt="" />
        <p className="fw-bold">
          Monster Kantong
        </p>
      </div>
    </WrapperHeader>
  );
}
