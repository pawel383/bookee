import { IAuthor } from 'app/shared/model/author.model';

export interface IBook {
  id?: number;
  title?: string;
  isbn?: string;
  author?: IAuthor;
}

export class Book implements IBook {
  constructor(public id?: number, public title?: string, public isbn?: string, public author?: IAuthor) {}
}
