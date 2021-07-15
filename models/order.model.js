import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        // user: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   required: true,
        //   ref: 'User',
        // },
        orderItems: [
          {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            category: { type: String, required: true },
            id: {
              type: mongoose.Schema.Types.ObjectId,
              required: true,
              ref: 'Product',
            },
          },
        ],
        shippingAddress: {
          fullName: { type: String, required: true },
          phoneNumber: { type: String, required: true },
          addressLine: { type: String, required: true },
          state: { type: String, required: true },
          city: { type: String, required: true },
          code: { type: String, required: true },
          country: { type: String, required: true },
        },
        paymentMethod: {
          type: String,
          required: true,
        },
        paymentResult: {
          amount: {type: Number},
          currency: {type: String},
          customer: {
               name: {type: String}, 
               email: {type: String},
               phone_number: {type: String},
           },
          flw_ref: {type: String},
          status: {type: String},
          tx_ref: {type: Date},
          transaction_id: {type: Number}
       },
       cartSubTotalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
        taxPrice: {
          type: Number,
          required: true,
          default: 0.0,
        },
        shippingPrice: {
          type: Number,
          required: true,
          default: 0.0,
        },
        totalPrice: {
          type: Number,
          required: true,
          default: 0.0,
        },
        isPaid: {
          type: Boolean,
          required: true,
          default: false,
        },
        paidAt: {
          type: Date,
        },
        isDelivered: {
          type: Boolean,
          required: true,
          default: false,
        },
        deliveredAt: {
          type: Date,
        },
      },
      {
        timestamps: true,
      }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;