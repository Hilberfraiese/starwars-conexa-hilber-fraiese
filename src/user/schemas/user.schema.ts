import { Schema, Document } from 'mongoose';
import { Role } from 'src/libs/enum';

export interface IUser extends Document {
  email?: string;
  password: string;
  role: Role;
  firstName: string;
  lastName: string;
  active: boolean;
  accessToken: string;
  refreshToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new Schema<IUser>({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: Object.values(Role), required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  active: { type: Boolean, default: true },
  accessToken: { type: String },
  refreshToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre<IUser>('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = new Date();
  }
  next();
});

export const UserModelName = 'User';
export default UserSchema;
