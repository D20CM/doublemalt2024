function NavLinks({ isOpen, closeMenu }) {
  return (
    <ul>
      <li onClick={() => closeMenu()}>
        <a href="#">
          <span>H</span>ome
        </a>
      </li>
      <li onClick={() => closeMenu()}>
        <a href="#videopage">
          <span>M</span>usic & Video
        </a>
      </li>
      <li onClick={() => closeMenu()}>
        <a href="#about">
          <span>A</span>bout
        </a>
      </li>
      <li onClick={() => closeMenu()}>
        <span>P</span>hotos
      </li>
      <li onClick={() => closeMenu()}>
        <a href="#contact">
          <span>C</span>ontact
        </a>
      </li>
      <li onClick={() => closeMenu()}>
        <a href="https://buymeacoffee.com/doublemaltduo">
          <span>T</span>ipjar
        </a>
      </li>
    </ul>
  );
}

export default NavLinks;
