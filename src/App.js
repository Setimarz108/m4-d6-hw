import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="mb-5">Strive Books</h1>
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <BookList books={fantasyBooks} />
      </header>
    </div>
  );
}

export default App;
