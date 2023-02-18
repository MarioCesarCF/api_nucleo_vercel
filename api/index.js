import express from 'express';
import { Router } from 'express';

const app = express();

const route = Router();

route.get('/', (req, res) => {
  return res.json({
    success: true,
    message: "Sucesso."
  })
})

app.use(route);

app.listen(3000, () => {
  console.log('Server running in port ' + 3000)
});