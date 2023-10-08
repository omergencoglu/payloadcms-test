import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import { payloadCloud } from "@payloadcms/plugin-cloud";

import Logo from "./graphics/Logo";
import Icon from "./graphics/Icon";

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "- Backend Test",
      favicon: "/assets/favicon.ico",
      ogImage: "/assets/logo.png",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  collections: [Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
});
