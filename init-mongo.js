// init-mongo.js

print('Creating user...');
db.createUser({
  user: 'root',
  pwd: 'example',
  roles: [
    {
      role: 'readWrite',
      db: 'mydatabase',
    },
  ],
});

print('Creating database...');
db.createCollection('cursos');
db.createCollection('temas');
