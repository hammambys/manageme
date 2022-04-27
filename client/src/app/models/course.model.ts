import { Group } from './group.model';

export class Course {
  id?: any;
  title?: string;
  description?: string;
  published?: boolean;
  hours_per_week?: number;
  groups: Group[] = [];
}
