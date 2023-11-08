import React, { Component } from "react";
import Menu from "@assets/components/Menu";

import BookManager from "@utils/types/book/BookManager";
import { useParams } from "react-router-dom";

interface HomeProps {
  page: string | null;
  current_book: string | null;
}

class Home extends Component<HomeProps, any> {
  private books: BookManager;

  constructor(props: HomeProps) {
    super(props);
    this.books = new BookManager();
  }

  render() {
    return (
      <div>
        <Menu
          {...this.props}
          books={this.books}
          current_book={this.props.current_book}
        />

        <h1>Notes Route</h1>
      </div>
    );
  }
}

export default (props: any) => {
  let { book } = useParams<{ book: string }>();

  return <Home {...props} current_book={book} />;
};
