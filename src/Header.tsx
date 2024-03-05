export const Header = () => {
  return (
    <>
      <div className="title">
        <p>Konstantinos Tsirangelos, Software Engineer</p>
      </div>
      <div className="separator"></div>
      <div className="link">
        <a href="mailto:ktsirangelos@proton.me">Email</a>
      </div>
      <div className="link">
        <a
          href="https://github.com/ktsirangelos"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
      <button id="theme-toggle" className="theme"></button>
    </>
  );
};
