# crud_book_operations
These endpoints correspond to the CRUD operations for managing books.

API Endpoints
Create a new book
Get all books
Get a single book by ID
Update a book by ID
Delete a book by ID

1. Create a New Book
Endpoint: POST /api/books
Description: Creates a new book record.
Request Body:
json
Copy code
{
  "name": "Book Name",
  "img": "Image URL",
  "summary": "Summary of the book"
}
Response:
Status: 201 Created
Body: The created book object.
Example:

bash
Copy code
curl -X POST http://localhost:5000/api/books -H "Content-Type: application/json" -d '{
  "name": "Harry Potter and the Goblet of Fire",
  "img": "https://bit.ly/3bQw3A5",
  "summary": "Harry competes in the Triwizard Tournament and faces new challenges at Hogwarts."
}'
2. Get All Books
Endpoint: GET /api/books
Description: Retrieves all book records.
Response:
Status: 200 OK
Body: An array of book objects.
Example:

bash
Copy code
curl -X GET http://localhost:5000/api/books
3. Get a Single Book by ID
Endpoint: GET /api/books/:id
Description: Retrieves a single book record by its ID.
URL Parameter:
id: The ID of the book.
Response:
Status: 200 OK
Body: The requested book object.
Example:

bash
Copy code
curl -X GET http://localhost:5000/api/books/66463e8a978c00ddf0baa5b0
4. Update a Book by ID
Endpoint: PUT /api/books/:id
Description: Updates an existing book record by its ID.
URL Parameter:
id: The ID of the book.
Request Body:
json
Copy code
{
  "name": "Updated Book Name",
  "img": "Updated Image URL",
  "summary": "Updated summary of the book"
}
Response:
Status: 200 OK
Body: The updated book object.
Example:

bash
Copy code
curl -X PUT http://localhost:5000/api/books/60d5f2839b1e8c1b48b5b3c2 -H "Content-Type: application/json" -d '{
  "name": "Harry Potter and the Goblet of Fire - Updated",
  "img": "https://bit.ly/3bQw3A5",
  "summary": "Harry competes in the Triwizard Tournament and faces new challenges at Hogwarts. Updated."
}'
5. Delete a Book by ID
Endpoint: DELETE /api/books/:id
Description: Deletes a book record by its ID.
URL Parameter:
id: The ID of the book.
Response:
Status: 200 OK
Body: The deleted book object.
Example:

bash
Copy code
curl -X DELETE http://localhost:5000/api/books/66463e8a978c00ddf0baa5b0
Summary of Endpoints
POST /api/books: Create a new book.
GET /api/books: Get all books.
GET /api/books/:id: Get a single book by ID.
PUT /api/books/:id: Update a book by ID.
DELETE /api/books/:id: Delete a book by ID.
By using these endpoints, you can perform all necessary CRUD operations on the book data stored in your MongoDB database. These endpoints can be tested using tools like curl (as shown in the examples), Postman, or directly integrated into a front-end application.
