export default function About(props) {
  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <h2>About this app </h2>
      <p>
        This app converts <strong>uppercase to lower case</strong> ,
        <strong>lowercase to uppercase</strong> and <strong>clear text</strong>
        .It has <strong>Chanracter counter </strong> and{" "}
        <strong>Word counter</strong>. I will add more functionalities later
        stay tuned. You can also change to
        <strong>Dark mode</strong>
      </p>
      <br />
      <h2>How I made this app-This app is made in react-js</h2>
      <p>To make this you need to know mainly about</p>
      <ul>
        <li>Components</li>
        <li>props</li>
        <li>useState (hook)</li>
        <li>
          Router (switch from one page to another without loading) <br />
          (https://reactrouter.com/web/guides/quick-start): used this site to
          know about reactrouter
        </li>
        <li>Bootstrap (little bit of Bootstrap)</li>
        <li>
          Dependencies (to install)
          <ul>
            <li>react-router-dom</li>
            <li>prop-types(in codesandbox)</li>
          </ul>
        </li>
      </ul>
      <h2>Why codesandbox</h2>
      <p>
        Because I have potato pc. It takes lot of time to install dependencies,
        by the time it install I loose my intrest init. So I use codesandbox and
        It is Good.
      </p>
    </div>
  );
}
