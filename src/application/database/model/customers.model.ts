import mongoose, { Document, Schema } from "mongoose";

interface ICustomer extends Document {
  fullname: string;
  email: string;
  contact: {
    phones: {
      _id: string;
      countryCode: number;
      areaCode: number;
      number: number;
      main: boolean;
    }[];
  };
  sendMail100DicasRendaExtra: boolean;
  confirmMail100DicasRendaExtra: boolean;
}

const customersSchema = new Schema<ICustomer>({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  sendMail100DicasRendaExtra: {
    type: Boolean,
  },
  confirmMail100DicasRendaExtra: {
    type: Boolean,
  },
  contact: {
    phones: [
      {
        _id: {
          type: String,
          required: true,
        },
        countryCode: {
          type: Number,
          required: true,
        },
        areaCode: {
          type: Number,
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
        main: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
});

const CustomerModel = mongoose.model<ICustomer>("customers", customersSchema);

export default CustomerModel;
