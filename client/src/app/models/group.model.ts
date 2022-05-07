import { Course } from './course.model';
import { User } from './user.model';

export class Group {
  id?: any;
  level?: string;
  name: string = '';
  users?: User[];
  courses?: Course[];
}
