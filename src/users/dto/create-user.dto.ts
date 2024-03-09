import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Alex' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'qwerty' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'alex@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: '+380931234567' })
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty({ example: 'Dnepr, Central str., 28' })
  @IsNotEmpty()
  readonly address: string;
}
