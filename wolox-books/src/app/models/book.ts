export class Book {
  private _id: number;
  private _author: string;
  private _title: string;
  private _image_url: string;
  private _editorial: string;
  private _year: string;
  private _genre: string;
  private _current_rent: string;

  constructor(bookObject) {
    if (Object.keys(bookObject).length === 0 && bookObject.constructor === Object) {
      this._id = 0;
      this._author = 'Autor del libro';
      this._title = 'Título del lubro';
      this._image_url = 'assets/book-cover.png';
      this._editorial = 'Nombre de la editorial';
      this._year = 'Año de publicación';
      this._genre = '(género)';
      this._current_rent = '';
    }

    if (Object.keys(bookObject).length !== 0 && bookObject.constructor === Object) {
      this._id = bookObject.id;
      this._author = bookObject.author;
      this._title = bookObject.title;
      this._image_url = bookObject.image_url;
      this._editorial = bookObject.editor;
      this._year = bookObject.year;
      this._genre = bookObject.genre;
      this._current_rent = bookObject.current_rent;
    }
  }

  get image_url() {
    return this._image_url;
  }
  get author() {
    return this._author;
  }
  get title() {
    return this._title;
  }
  get editorial() {
    return this._editorial;
  }
  get year() {
    return this._year;
  }
  get genre() {
    return this._genre;
  }
}
