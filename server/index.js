import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
const app = express();
import schema from "./Schemas/index.js";
app.use(express.json());
app.use(cors());

const port = 6969;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`server running on port ${port}`));
