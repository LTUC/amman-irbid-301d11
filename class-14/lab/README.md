# Database Normalization

## Overview

Today you will be seeding a database, then executing a series of commands to normalize your data into two tables: books and authors. You will execute a series of SQL commands, as demonstrated in class and detailed below, to normalize your data and remove duplications.

If the normalization is successful, the user will not be aware that anything has changed.

At the end of this process, your tables should be represented in your database as two tables:

- A table for authors. This table will be referenced by the books table, below.


```sql
                                     Table "public.authors"
  Column   |          Type          | Collation | Nullable |                Default
-----------+------------------------+-----------+----------+---------------------------------------
 id        | integer                |           | not null | nextval('authors_id_seq'::regclass)
 name      | character varying(255) |           |          |
Indexes:
    "authors_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "books" CONSTRAINT "fk_author" FOREIGN KEY (author_id) REFERENCES authors(id)
```

- A table for books. This table will have a `author_id` property which is a foreign key that references the `id` property of the `authors` table.

```sql
                                     Table "public.books"
    Column    |          Type          | Collation | Nullable |              Default
--------------+------------------------+-----------+----------+-----------------------------------
 id           | integer                |           | not null | nextval('books_id_seq'::regclass)
 title        | character varying(255) |           |          |
 author       | character varying(255) |           |          |
 isbn         | character varying(255) |           |          |
 image_url    | character varying(255) |           |          |
 description  | text                   |           |          |
 author_id    | integer                |           |          |
Indexes:
    "books_pkey" PRIMARY KEY, btree (id)
Foreign-key constraints:
    "fk_author" FOREIGN KEY (author_id) REFERENCES authors(id)
```

## Resources

- [schema.sql](starter-code/data/schema.sql)

### Configuration

Create a new repo with the name `lab-14`

_Your repository must include the following config files:_

- `README.md` - with a time estimate as described below.
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter

Use the following as a guide for your directory structure.

```sh
lab-14 (repository)
├──data
│  ├── migrations
│  │   └── <timestamp>-<description>.sql
│  └── schema.sql
│
├── .eslintrc.json
├── .gitignore
└── README.md
```

### Time Estimate

Make an estimate of the time it will take you to complete the migration, and record your start and finish times in the correct spot:

```md
Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
```

Add this information to your README.

## Database Setup

In your PSQL shell, create a `lab14` database: `CREATE DATABASE lab14;`.

Next use the `schema.sql` file in the lab folder to populate your new database from the terminal prompt: `psql -f /data/schema.sql -d lab14`.

Restart PSQL and switch to `lab14`, then verify it has contents with: `SELECT COUNT(*) FROM books;`

This lab14 database is currently denormalized and we need to normalize it. Begin by creating a copy of the database with the following command:

`CREATE DATABASE lab14_normal WITH TEMPLATE lab14;`

Confirm the success of this process by connecting to the `lab14_normal` database and typing `SELECT COUNT(*) FROM books;`, where you should see the same data you have in your existing database.

This separate database is intended to serve as a place to practice the process of normalizing a database while not resulting in a broken book app. You are encouraged to RETYPE the provided commands in your SQL shell.

Once your `lab14_normal` database is confirmed as being properly populated you are ready to proceed to the migration phase.

## Database Migration

Query 1: `CREATE TABLE AUTHORS (id SERIAL PRIMARY KEY, name VARCHAR(255));`

- This query will create a second table in the `lab14_normal` database named `authors`. Confirm the success of this command by typing `\d authors` in your SQL shell. You should see the authors table schema, as shown above.

Query 2: `INSERT INTO authors(name) SELECT DISTINCT author FROM books;`

- This query will use a simple subquery to retrieve unique author values from the books table and insert each one into the authors table in the `name` column. This is a great pattern for copying lots of data between tables.
- Confirm the success of this command by typing `SELECT COUNT(*) FROM authors;` in your SQL shell. The number should be greater than zero.

Query 3: `ALTER TABLE books ADD COLUMN author_id INT;`

- This query will add a column to the books table named `author_id`. This will connect each book to a specific author in the other table.
- Confirm the success of this command by typing `\d books` in your SQL shell. The table schema should now include a column for `author_id`, in addition to the column for the string `author`; the `author` column will be removed in Query 5.

Query 4: `UPDATE books SET author_id=author.id FROM (SELECT * FROM authors) AS author WHERE books.author = author.name;`

- This query will prepare a connection between the two tables. It works by running a subquery for every row in the `books` table. The subquery finds the author row that has a `name` matching the current book's `author` value. The `id` of that author row is then set as the value of the `author_id` property in the current book row.
- Confirm the success of this command by typing `SELECT author_id FROM books;` in your SQL shell. The result should display a column containing the unique ids for the authors. The numbers should match the total number returned from Query 2 when you confirmed the success of the insertion of names into the authors table.

Query 5: `ALTER TABLE books DROP COLUMN author;`

- This query will modify the books table by removing the column named `author`. Now that the books table contains a `author_id` column which will become a foreign key, your table does not need to contain a string representing each author.
- Confirm the success of this command by typing `\d books` in your SQL shell. The books table schema should be updated to reflect the schema provided above, without the `author` column.

Query 6: `ALTER TABLE books ADD CONSTRAINT fk_authors FOREIGN KEY (author_id) REFERENCES authors(id);`

- This query will modify the data type of the `author_id` in the books table, setting it as a foreign key which references the primary key in the authors table. Now PostgreSQL knows HOW these 2 tables are connected.
- Confirm the success of this command by typing `\d books` in your SQL shell. You should see details about the foreign key constraints, as shown in the schema above.

## Addition of a migrations folder

Create a `/data` folder in the root of your repository that contains a folder named `migrations`. This folder will contain a series of files that represent a change log of your database configuration. You will create a file to document today's database migration steps.

The naming convention will follow the pattern of `timestamp-description.sql`. This file should contain the SQL queries executed, in order, with comments to describe the purpose of each query. The easiest way to obtain the current timestamp is to open the developer tools in a browser window and type `Date.now();`. This naming convention will ensure your team keeps track of how and when the database is changing over the life of a project.

There is a sample of a `migrations` directory for you to view in the demo folder for today's lab.

## Stretch Goal: Modify the existing book app code base (if you choose to normalize your actual book app database)

Your code will need to be modified in several ways now that the data is being retrieved from two tables. Some of the following items will need to be changed, depending on how your server and EJS files are structured.

- In the server code:
- Your query to view the details of a single book will need to request information from both the books table and the authors table. This should be done as a single JOIN query.
- If you have a query to request the authors from the books table, it will now need to request `name` of rows from the `authors` table.
- Your query to add a single book might need to create records in both tables. Ensure a author doesn't already exist before adding to the `authors` table!

- In the EJS files:
- Any reference to the `author` from the `books` table will now need to refer to the `name` of the shelf from the `authors` table.

## Submission Instructions

Once you have completed this assignment, type the command `\d books` to display your books schema. Then type the  command `\d authors` to display your authors schema. Ensure that both schemas fit on the screen at the same time, and take a screenshot.

Submit a link to your `lab-14` repo. Add a comment to your Canvas submissions with a link to the screenshot. Also comment with how long you spent on your lab.
