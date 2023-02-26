import mongoose, { Model, Schema } from "mongoose"
// const Schema = mongoose.Schema;
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import ICreateUser from "../interfaces/user.interface";

interface IUserModel extends Model<ICreateUser> {
  findByCredentials(email: string, password: string): Promise<ICreateUser>
}

const userSchema:Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      maxlength: 250,
      trim: true,

    },
    roles: {type: String,
      enum: ["admin", "guest"],
      default: "guest"
     },

    tokens: [{
      token: {
        type: String,
        required: true
      }
    }]
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this
  const userData = user.toObject()

  delete userData.password
  delete userData.tokens

  return userData
}
userSchema.methods.generateAuthToken = async function () {
  const secret = <string><unknown>process.env.SECRET_SIGNATURE
  // console.log(secret)
  const user = this
  const token = jwt.sign({_id: user._id.toString()}, secret);
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

// userSchema.statics.logOut = async  () => {
//   const user = await User.exists({tokens})
//   user.tokens =  token.token !== token
  
//   // user.tokens = user.tokens.filter((token) => {
//   //   return token.token !== token
//   // })
//   await user.save();
// }

userSchema.statics.findByCredentials = async(email, password) => {
  const user = await User.findOne({email})
  if (!user) {
    throw new Error("Unable to login")
  }
  const isMatchPassword: boolean = await bcrypt.compare(password, user.password)
  if (!isMatchPassword) {
    throw new Error("Unable to login")
  }
  return user;
}

userSchema.pre("save", async function (next) {
  const user = this
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next();
})

userSchema.set("toJSON", {
  versionKey: false,

  transform(doc, ret) {
    delete ret.__v;
  },
});


export const User: IUserModel = mongoose.model<ICreateUser, IUserModel>('User', userSchema);


export default User