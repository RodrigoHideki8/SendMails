import mongoose, { Document, Schema } from "mongoose";

interface ISendMailLog extends Document {
  email: string;
  status: string;
  error: string;
  event: string;
}

const logSchema = new Schema<ISendMailLog>({
  email: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  error: {
    type: String,
  },
  event: {
    type: String,
    required: true,
  },
});

const LogModel = mongoose.model<ISendMailLog>("sendMailLog", logSchema);

export default LogModel;
