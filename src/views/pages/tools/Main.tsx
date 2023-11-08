import React, { Component } from "react";
import Menu from "@assets/components/Menu";

import style_local from "@assets/styles/tools.main.module.scss";
import { Title_S1 } from "@/views/assets/elements/common.element";

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

        <Title_S1 className={style_local.title}>
          ferramentas para {this.props.current_book}
        </Title_S1>
      </div>
    );
  }
}

export default (props: any) => {
  let { book } = useParams<{ book: string }>();

  return <Home {...props} current_book={book} />;
};
