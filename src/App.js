import React from "react";
import { Route, Switch } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div className="container">
      <NavBar />
      <hr />
      <Switch>
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit/:id" component={StreamEdit} />
        <Route exact path="/streams/delete/:id" component={StreamDelete} />
        <Route exact path="/streams/show/:id" component={StreamShow} />
      </Switch>
    </div>
  );
};

export default App;
