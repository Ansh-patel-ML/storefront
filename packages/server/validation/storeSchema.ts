import { z } from "zod";

export const createStoreSchema = z.object({
  body: z.object({
    user_id: z.number({
      required_error: "UserId is required",
    }),
    name: z.string({
      required_error: "name is required",
    }),
  }),
});

export const updateStoreSchema = z.object({
  body: z.object({
    id: z.number({
      required_error: "id is required",
    }),
    field: z.object({
      name: z.string({
        required_error: "name is required",
      }),
    }),
  }),
});
