import { MdArrowBackIos } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

function Header() {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "25px",
        }}
      >
        {/* Back Option */}
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <MdArrowBackIos />
          <p>BACK TO ALL PLANS</p>
        </div>

        {/* Right Heart Icon */}
        <div style={{ cursor: "pointer" }}>
          <CiHeart />
        </div>
      </header>
      <hr />
    </>
  );
}

export default Header;
