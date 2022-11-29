import { UserDetails } from 'src/users/interfaces/UserDetails';
import { UserDocument } from 'src/users/schemas/user.schema';

export async function getUser(user: UserDocument): Promise<UserDetails> {
  return await {
    id: user._id,
    name: user.name,
    email: user.email,
  };
}
