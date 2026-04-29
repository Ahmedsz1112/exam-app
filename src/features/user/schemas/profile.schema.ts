import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  profilePhoto: z.string().nonempty(),
});
