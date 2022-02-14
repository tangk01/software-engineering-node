import Like from "../../models/Like";

/**
 * @file Declares API for Likes related data access object methods
 */
export default interface ILikeDao {
  findAllUsersThatLikedTuit (tid: string): Promise<Like[]>;
  findAllTuitsLikedByUser (uid: string): Promise<Like[]>;
  userUnlikesTuit (tid: string, uid: string): Promise<any>;
  userLikesTuit (tid: string, uid: string): Promise<Like>;
};