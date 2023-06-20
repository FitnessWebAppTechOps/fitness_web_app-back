import * as env from "env-var";
import "./dotenv";

export const config = {
  service: {
    port: env.get("PORT").default(8001).required().asPortNumber()
  },
  mongo: {
    uri: env
      .get("MONGO_URI")
      .default("mongodb://localhost")
      .required()
      .asString(),
    programsCollectionName: env
      .get("PROGRAMS_COLLECTION_NAME")
      .default("programs")
      .required()
      .asString()
  }
};
