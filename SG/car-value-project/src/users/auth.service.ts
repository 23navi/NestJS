import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {

    // check if email is in use
    const user = await this.usersService.find(email);
    if (user) {
      throw new BadRequestException('email in use');
    }

    // Hash the password to create a new user

        //step 1: Create a salt 
    const salt = randomBytes(8).toString('hex');

        // step 2: Hash the salt and the password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

        // step 3: Join the hashed result and the salt together

    const result = salt + '.' + hash.toString('hex');


  }


}
