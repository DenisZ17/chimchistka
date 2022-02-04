import Link from "next/link";
export default function Header() {
  return (
    <div className="header__menu">
      <Link href="/">
        <a>Главная</a>
      </Link>
      <Link href="/service">
        <a>Услуги</a>
      </Link>
      <style jsx>{`
        .header__menu {
          background: gold;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
