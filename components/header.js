import Header_top from "./header/Header_top";
import Header_bottom from "./header/Header_bottom";

export default function Header() {
  return (
    <>
      <header className="header">
        <Header_top />
        <Header_bottom />
      </header>
    </>
  );
}
