import Link from "next/link";

const Header = () => {
  return (
    <header>
        <Link href="/">Карта</Link>
        <Link href="/articles">Материалы</Link>
        <Link href="/about">О проекте</Link>
    </header>
  );
}

export { Header };