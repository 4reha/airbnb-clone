import Logo from './Logo';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';

export interface HeaderProps {
  searchBar?: boolean;
}

const Header = () => {
  return (
    <header className="py-4 px-10 flex justify-between items-center border-b">
      <Logo />
      <SearchBar />
      <LoginButton />
    </header>
  );
};

export default Header;
