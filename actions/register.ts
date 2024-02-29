"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { hashPassword } from "@/lib/utils";
import { RegisterSchema } from "@/schemas";
import { error } from "console";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, name } = validatedFields.data;

  const hashedPassword = await hashPassword(password);

  const existinUser = await getUserByEmail(email);
  if (existinUser) {
    return { error: "Email already exsists" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const verficationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verficationToken.email, verficationToken.token);
  return { success: "Confirmation email sent!" };
};
