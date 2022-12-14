const express = require('express');
const bodyParser = require('body-parser').json();
const handleError = require('./middlwares/error');
require('dotenv').config();

const userRouter = require('./UserRoutes/routes');
const categoriesRouter = require('./CategoriesRoutes/routes');
const postRouter = require('./PostsRoutes/routes');

const app = express();
app.use(bodyParser);

app.use(userRouter);
app.use(categoriesRouter);
app.use(postRouter);

const PORT = 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use(handleError);