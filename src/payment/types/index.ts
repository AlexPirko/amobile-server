import { ApiProperty } from '@nestjs/swagger';

export class MakePaymentResponse {
  @ApiProperty({ example: 'pi_3Oj3EEEFqItSxCYN0CrneRYD' })
  id: string;

  @ApiProperty({ example: 'payment_intent' })
  object: string;

  @ApiProperty({ example: 10000 })
  amount: number;

  @ApiProperty({ example: 0 })
  amount_capturable: number;

  @ApiProperty({
    example: 'pi_3Oj3EEEFqItSxCYN0CrneRYD_secret_4K3dAV7rMQPjuUcHLWs19AwoW',
  })
  client_secret: string;

  @ApiProperty({ example: 'automatic' })
  confirmation_method: string;

  @ApiProperty({ example: 1707758618 })
  created: number;

  @ApiProperty({ example: 'uah' })
  currency: string;

  @ApiProperty({ example: {} })
  metadata: object;
}
