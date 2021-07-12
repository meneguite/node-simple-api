# Node Simple Api Example

## Endpoints

### GET /users
Return list of users

```json
[
  {
    "id": 1,
    "name": "Nanna Pedersen",
    "email": "nanna.pedersen@example.com"
  },
  {
    "id": 2,
    "name": "Sarah Oliver",
    "email": "sarah.oliver@example.com"
  },
  {
    "id": 3,
    "name": "Hector Guerrero",
    "email": "hector.guerrero@example.com"
  },
  {
    "id": 4,
    "name": "Noah Poulsen",
    "email": "noah.poulsen@example.com"
  }
]
```


### GET /users/{id}
Return user by id

```json
{
  "id": 2,
  "name": "Sarah Oliver",
  "email": "sarah.oliver@example.com"
}
```