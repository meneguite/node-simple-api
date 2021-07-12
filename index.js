const http = require('http');
const { URL } = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const users = [
  { id: 1, name: 'Nanna Pedersen', email: "nanna.pedersen@example.com" },
  { id: 2, name: 'Sarah Oliver', email: "sarah.oliver@example.com" },
  { id: 3, name: 'Hector Guerrero', email: "hector.guerrero@example.com" },
  { id: 4, name: 'Noah Poulsen', email: "noah.poulsen@example.com" },
];

const listUsers = (res) => {
  res.write(JSON.stringify(users))
  res.end();
}

const showUser = (res, id) => {
  const user = users.find((u) => u.id == id);
  if (!user) {
    res.statusCode = 400;
    return res.end('{ "status": "error", "message": "Invalid User Id" }');
  }
  res.write(JSON.stringify(user))
  res.end();
}

const server = http.createServer((req, res) => {
  const baseURL = (req.protocol || 'http') + '://' + req.headers.host + '/';
  const url = new URL(req.url, baseURL);

  if (!url) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end('{ "status": "error", "message": "Internal Server Error" }');
    return;
  }

  const path = url.pathname.split('/').slice(1);
  const resource = path[0] || '';

  if (resource === 'users') {
    if (path.length === 1 && req.method === 'GET') return listUsers(res);
    if (path.length === 2 && req.method === 'GET') return showUser(res, path[1]);
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end('{ "status": "error", "message": "Not Found" }');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});