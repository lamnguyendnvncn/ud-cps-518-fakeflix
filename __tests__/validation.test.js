function validateForm({ email, password }) {
  const errors = {};

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (password.length > 30) {
    errors.password = "Password must be less than 30 characters";
  }

  return errors;
}

describe("Form Validation", () => {
  it("should return error if email is missing", () => {
    const result = validateForm({ email: "", password: "validpass" });
    expect(result.email).toBe("Email is required");
  });

  it("should return error if email is invalid", () => {
    const result = validateForm({ email: "invalidemail", password: "validpass" });
    expect(result.email).toBe("Email is invalid");
  });

  it("should return error if password is missing", () => {
    const result = validateForm({ email: "test@example.com", password: "" });
    expect(result.password).toBe("Password is required");
  });

  it("should return error if password is too short", () => {
    const result = validateForm({ email: "test@example.com", password: "123" });
    expect(result.password).toBe("Password must be at least 6 characters");
  });

  it("should return error if password is too long", () => {
    const longPassword = "a".repeat(31);
    const result = validateForm({ email: "test@example.com", password: longPassword });
    expect(result.password).toBe("Password must be less than 30 characters");
  });

  it("should return no errors for valid email and password", () => {
    const result = validateForm({ email: "test@example.com", password: "securePassword123" });
    expect(result).toEqual({});
  });
});
