import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'author',
        loadChildren: () => import('./author/author.module').then(m => m.BookeeAuthorModule)
      },
      {
        path: 'book',
        loadChildren: () => import('./book/book.module').then(m => m.BookeeBookModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class BookeeEntityModule {}
