interface BookScheme {
  _id: number;
  name: string;
  label: string;
  resource: Array<string>;
  image: string;
  resume: string;
  description: string;
}

/**
 * Book
 * @class
 */
class Book implements BookScheme {
  constructor(
    public _id: number,
    public name: string,
    public label: string,
    public resource: Array<string>,
    public image: string,
    public resume: string,
    public description: string
  ) {}

  /**
   * @method hasResource
   * @param {string} resource_identifier Variable with the resource identifier that must be checked
   * @return {boolean} True if they have the specified resource and False otherwise
   */
  public hasResource(resource_identifier: string): boolean {
    return this.resource.map((identifier, index) => {
      let [tab, subtab] = identifier.indexOf("-")
        ? identifier.split("-")
        : [null, identifier];

      if (resource_identifier === tab || resource_identifier === subtab)
        return true;
    }).length < 1
      ? true
      : false;
  }

  public get json() {
    return {
      _id: this._id,
      name: this.name,
      label: this.label,
      resource: this.resource,
      image: this.image,
      resume: this.resume,
      description: this.description,
    };
  }
}

export default class BookManager {
  private BookList: Array<Book> = [];

  constructor() {
    const AvailableBooks: Array<BookScheme> = require("./BookData.json");

    AvailableBooks.map((book_config) => {
      this.BookList.push(
        new Book(
          book_config._id,
          book_config.name,
          book_config.label,
          book_config.resource,
          book_config.image,
          book_config.resume,
          book_config.description
        )
      );
    });
  }

  public getList(filter: any = {}, scheme: any = null): Array<any> {
    let negativeFilter = {};

    if (Array.isArray(filter)) [filter, negativeFilter] = filter;

    return this.BookList.filter((book: any) => {
      book = book.json;

      let valid = true;

      for (const [key, value] of Object.entries(filter))
        if (Object.keys(book).indexOf(key) != -1) {
          valid = book[key] === value;

          if (!valid) break;
        }

      if (valid)
        for (const [key, value] of Object.entries(negativeFilter))
          if (Object.keys(book).indexOf(key) != -1) {
            valid = book[key] !== value;

            if (!valid) break;
          }

      return valid;
    }).map((book: any) => {
      book = book.json;

      let result: any = {};

      if (scheme != null)
        for (const [key, alias] of Object.entries(scheme))
          if (Object.keys(book).indexOf(key) != -1) {
            let value = book[key];

            if (alias != null) result[JSON.stringify(alias)] = value;
            else result[key] = value;
          } else result[key] = alias;
      else result = book;

      return result;
    });
  }
}
