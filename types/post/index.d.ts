import mongoose, { Document } from "mongoose";

declare global{
     namespace Entities {
      export interface IReply extends Document {
        userId: mongoose.Schema.Types.ObjectId;
        likes?: mongoose.Schema.Types.ObjectId[];
        text: string;
      }
    
      export interface IComment extends Document {
        userId: mongoose.Schema.Types.ObjectId;
        text: string;
        likes?: mongoose.Schema.Types.ObjectId[];
        replies?: IReply[];
      }
    
      export interface ILike extends Document {
        userId: mongoose.Schema.Types.ObjectId;
      }
    
      export interface IPost extends Document {
        userId: mongoose.Schema.Types.ObjectId;
        text: string;
        images: string[]
        likes?: ILike[];
        comments?: IComment[];
      }
    }

}
