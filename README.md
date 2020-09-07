# mikro-orm-arp

Active Record(-ish) Pattern for Mikro-ORM.

Ads the own repository functions to the class as static functions so you don't have to always retrieve them.

## 🏗 Installation

```bash
npm install mikro-orm-arp
```

## 🚀 Usage

```js
import { MikroORM, Entity, Property } from '@mikro-orm/core'
import { register, BaseEntity } from 'mikro-orm-arp'

@Entity()
export class Book extends BaseEntity {
  @Property()
  name: string = ''
}

MikroORM.init({
  entities: [Book, BaseEntity],
  // ...
}).then(async (db) => {
  register(db)

  // Find one
  const book: Book = await Book.findOneOrFail({ name: 'Journey to the center of the earth' })
 
  // Create and save
  const newBook = Book.create({ name: '' })
  Book.persist(newBook)
  await Book.flush

  // Repo
  const bookRepo = Book.getRepo()
})
```
