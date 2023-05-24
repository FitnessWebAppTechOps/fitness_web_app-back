import * as env from "env-var";
import "./dotenv";

export const config = {
  service: {
    // TODO: change to secret generator service (will use rabbitmq or some way to interact with this service)
    jwt_secret: env
      .get("JWT_SECRET")
      .default(
        "5ef0a329d97f87fd65a162cbf6fc1422740343a69b6dbe85e9bb3e448418ce0a"
      )
      .required()
      .asString(),
    port: env.get("PORT").default(8000).required().asPortNumber(),
  },
  mongo: {
    uri: env
      .get("MONGO_URI")
      .default("mongodb://localhost")
      .required()
      .asString(),
    usersCollectionName: env
      .get("USERS_COLLECTION_NAME")
      .default("users")
      .required()
      .asString(),
  },
};
