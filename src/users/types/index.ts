import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Alex' })
  username: string;

  @ApiProperty({ example: 'qwerty' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Alex',
        password: 'qwerty',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'Logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'session has ended' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Alex' })
  username: string;

  @ApiProperty({ example: 'alex@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Alex' })
  username: string;

  @ApiProperty({
    example: '$2b$10$90H0Hn.6Nx0SbrHQCX2xeeYjq.02nS5VpkIIwFAtDtCHEqHK',
  })
  password: string;

  @ApiProperty({ example: 'alex@gmail.com' })
  email: string;

  @ApiProperty({ example: '+380931234567' })
  phone: string;

  @ApiProperty({ example: 'Dnepr, Central str., 28' })
  address: string;

  @ApiProperty({ example: '2024-01-17T17:23:33.502Z' })
  updatedAt: string;

  @ApiProperty({ example: '2024-01-17T17:23:33.502Z' })
  createdAt: string;
}
