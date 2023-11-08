import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";

import BookManager from "@utils/types/book/BookManager";
import { Navigate } from "react-router-dom";

interface MenuProps {
  books: BookManager;
  page: string | null;
  current_book: string | null;
}

class Menu extends Component<MenuProps, any> {
  private books: BookManager;

  state: {
    redirect: string | null;
  } = {
    redirect: null,
  };

  constructor(props: MenuProps) {
    super(props);

    this.books = this.props.books;
  }

  private items: MenuItem[] = [
    {
      label: "Home",
      icon: "fa fa-home fa-lg",
      command: (e) => this.teste(e.item.data),
      data: {
        page: "home",
      },
    },
    {
      label: "Adventures",
      icon: "fa fa-leanpub fa-lg",
      command: (e) => this.teste(e.item.data),
      data: {
        page: "adventures",
      },
    },
    {
      label: "Tools",
      icon: "fa fa-briefcase fa-lg",
      command: (e) => this.teste(e.item.data),
      data: {
        page: "tools",
      },
    },
    {
      label: "Notes",
      icon: "fa fa-file fa-lg",
      command: (e) => this.teste(e.item.data),
      data: {
        page: "notes",
      },
    },
  ];

  private start = (
    <img
      alt="logo"
      src={process.env.PUBLIC_URL + "/logo.png"}
      height="50"
      style={{ marginRight: "2rem" }}
    ></img>
  );

  private end = () => {
    let current_book: any, book_list: any;

    if (this.props.current_book != undefined)
      current_book = this.books.getList(
        { name: this.props.current_book },
        { label: null, name: null }
      )[0];
    else current_book = { label: "Not selected", name: "__" };

    if (current_book == undefined)
      current_book = { label: "Not selected", name: "__" };

    book_list = this.books.getList([{}, { name: current_book.name }], {
      label: null,
      name: null,
    });

    book_list.map((book: any) => {
      book.command = (e: any) => this.bookChange(e);
    });

    return (
      <div style={{ display: "inline-flex" }}>
        <p>Current Book:</p>
        <SplitButton
          label={current_book.label}
          style={{
            fontWeight: "bold",
          }}
          model={book_list}
          size="small"
          text
        />
      </div>
    );
  };

  teste(e: any) {
    if (this.props.current_book ?? false)
      this.setState({
        redirect: "/" + this.props.current_book + "/" + e.page,
      });
    else
      this.setState({
        redirect: "/" + e.page,
      });
  }
  bookChange(book_data: any) {
    this.setState({
      redirect: "/" + book_data.item.name + "/" + this.props.page,
    });
  }

  render() {
    const { redirect } = this.state;

    this.items = this.items.map((element) => {
      if (element.data.page == this.props.page)
        element.className = "p-menuitem-active-coloring";

      return element;
    });

    return (
      <div className="card">
        {redirect != null ? <Navigate to={redirect} /> : ""}

        <Menubar
          style={{
            marginTop: "1.5rem",
            marginInline: "15vw",
            paddingInline: "3rem",
          }}
          start={this.start}
          model={this.items}
          end={this.end}
        />
      </div>
    );
  }
}

export default Menu;
