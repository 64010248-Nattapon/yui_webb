import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateLogin(username: string, password: string): Promise<boolean> {
    const isValid = await this.userService.validateUser(username, password);
    if (!isValid) {
      throw new UnauthorizedException('ข้อมูลไม่ถูกต้อง');
    }
    return true;
  }
}
