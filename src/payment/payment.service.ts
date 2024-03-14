import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { MakePaymentDto } from './dto/make-payment.dto';

@Injectable()
export class PaymentService {
  private stripe: any;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }

  checkout(makePaymentDto: MakePaymentDto) {
    const totalPrice = makePaymentDto.amount;
    const cart = makePaymentDto.description;

    return this.stripe.paymentIntents.create({
      amount: +totalPrice.toFixed(2) * 100, // cents
      currency: 'uah', // set currency
      payment_method_types: ['card'],
      description: cart,
    });
  }
}
