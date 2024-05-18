import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1 className="fixed top-0 left-0">BACKSTAGE TALKS</h1>
        <h2 className="fixed top-0 right-0">info@backstagetalks.com</h2>
      </header>
      <div className="bg-[#e30512]">
        <img
          src="https://backstagetalks.com/img/backstagetalks_cover_issue_7.png"
          alt=""
        />
        <p>Issue #7</p>
        <div>
          <p>
            <a href="">BUY HERE</a> (Europe)
          </p>
          <p>
            <a href="">BUY HERE</a> (UK & Overseas)
          </p>
          <p>
            or in <a href="">selected stores</a>
          </p>
        </div>
      </div>
      <article className="fixed bottom-0 left-0 w-56">
        <p className="font-bold">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
        <p>© 2024 Published by Büro Milk</p>

        <p>Privacy Policy</p>
      </article>
      <article className="fixed bottom-0 right-0">
        <ul>Issue #7</ul>
        <ul>Issue #6</ul>
        <ul>Issue #5</ul>
        <ul>Issue #4</ul>
        <ul>Issue #3</ul>
        <ul>Issue #2</ul>
        <ul>Issue #1</ul>
      </article>
    </>
  );
}

export default App;
