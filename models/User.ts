/**
 * @file Declares User data type
 */
import AccountType from "./AccountType";
import MaritalStatus from "./MaritalStatus";
import Location from "./Location";
import mongoose from "mongoose";

export default class User {
  _id?: mongoose.Schema.Types.ObjectId;
  private username: string = '';
  private password: string = '';
  private firstName: string | null = null;
  private lastName: string | null = null;
  private email: string = '';
  private profilePhoto: string | null = null;
  private headerImage: string | null = null;
  private accountType: AccountType = AccountType.Personal;
  private maritalStatus: MaritalStatus = MaritalStatus.Single;
  private biography: string | null = null;
  private dateOfBirth: Date | null = null;
  private joined: Date = new Date();
  private location: Location | null = null;
}