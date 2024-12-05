import Content from '../components/Content';

interface HeaderProps{
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <>
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="dashTop"></div>
        </div>
        <h2>{title}</h2>
        <div className="fa fa-search searchIcon"></div>

      </div>
      <Content />
    </>

  )
}

export default Header
