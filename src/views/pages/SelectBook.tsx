import React, { Component } from "react";
import style_local from "@assets/styles/select.book.module.scss";

import Menu from "@assets/components/Menu";
import { Title_S1 } from "@/views/assets/elements/common.element";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import BookManager from "@utils/types/book/BookManager";
import { Link } from "react-router-dom";

interface SelectBook_Interface {
  page: string;
}

class SelectBook extends Component<SelectBook_Interface, any> {
  private books: BookManager;

  constructor(props: SelectBook_Interface) {
    super(props);
    this.books = new BookManager();
  }

  card_header = (src: string, alt: string = "RPG Book") => (
    <img alt={alt} src={src} />
  );

  card_footer = (path: string) => (
    <div className={style_local.button}>
      <Link to={"../" + path} relative="route">
        <Button label="Select" />
      </Link>
    </div>
  );

  render() {
    const bookList = this.books.getList();

    return (
      <div>
        <Menu page="" current_book="" books={this.books} />

        <Title_S1 className={style_local.title}>
          Bem-Vindo ao Sistema de RPG!
        </Title_S1>

        <div className={style_local.wrapper}>
          <h2 className={style_local.instruction}>
            Esperamos que você aproveite as ferramentas e recursos disponíveis
            para aprimorar sua experiência de jogo de RPG.
          </h2>

          <h4 className={style_local.instruction}>
            Por favor, selecione um dos livros disponíveis abaixo
          </h4>

          <div className={style_local.cards_contents}>
            {bookList.map((book) => {
              return (
                <Card
                  key={book.name + book._id}
                  title={book.label}
                  footer={this.card_footer(book.name + "/" + this.props.page)}
                  header={this.card_header(book.image)}
                  className={style_local.card}
                >
                  <p>{book.resume}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBook;
