import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import mongoose, { model, Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 8,
    },
    fullName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video",
      },
    ],
  },
  { timestamps: true }
);
//mongoose middleware (run before or after the specific event in data lifecycle)
//here middleware is pre and event is save
//callback run just before(pre) saving(event) the data to db
//function keyword is used to get the context
//Also known as hooks
userSchema.pre("save", async function (next) {
  //hash the password using bcrypt library if only password changes
  if (!this.isModified("password")) return next();
  this.password = hash(this.password, 10);
  next();
});
userSchema.method("isPasswordCorrect", async function (password) {
  return await compare(password, this.password);
});
userSchema.method("generateAccessToken", function () {
  return sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
});
userSchema.method("generateRefreshToken", function () {
  return sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
});
const User = model("User", userSchema);
export { User };
