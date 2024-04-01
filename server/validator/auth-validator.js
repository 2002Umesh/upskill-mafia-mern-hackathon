const { z } = require("zod");

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email address is required" })
    .email("Invalid Email Address"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, "Password should have at least 8 characters"),

});

const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username cannot exceed 50 characters"),

  phone: z
    .string({ required_error: "Phone number is required" })
    .length(10, "Please enter a valid Phone Number"),
});

module.exports = {signupSchema,loginSchema};
