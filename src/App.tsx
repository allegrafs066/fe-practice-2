import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="m-0 p-0">
      <div className="h-screen w-screen snap-mandatory snap-y overflow-y-scroll flex flex-col ">
        <Card content="Card 1 Content" />
        <Card content="Card 2 Content" />
        <Card content="Card 3 Content" />
      </div>
      <div className="p-8">
        <header>
          <img
            src="https://backstagetalks.com/img/logo.png"
            className="fixed top-4 left-4 w-64"
          />
          <h2 className="fixed top-4 right-4">info@backstagetalks.com</h2>
        </header>
        <article className="fixed bottom-4 left-4 w-56">
          <p className="font-bold">
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </p>
          <p>© 2024 Published by Büro Milk</p>

          <p>Privacy Policy</p>
        </article>
        <article className="fixed bottom-4 right-4">
          <ul>Issue #7</ul>
          <ul>Issue #6</ul>
          <ul>Issue #5</ul>
          <ul>Issue #4</ul>
          <ul>Issue #3</ul>
          <ul>Issue #2</ul>
          <ul>Issue #1</ul>
        </article>
      </div>
    </div>
  );
}

export default App;
