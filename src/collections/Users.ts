import { CollectionConfig, FieldHook } from "payload/types";

const generateTitle: FieldHook = async ({ data }) => {
  // return formatted version of title if exists, else return email
  const newName = data.firstName + " " + data.lastName || null;
  return newName ?? data.email;
};

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      admin: { hidden: true },
      hooks: {
        beforeChange: [generateTitle],
      },
    },
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
  ],
};

export default Users;
