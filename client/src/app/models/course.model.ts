import { CourseMat } from './courseMat.model';
import { Group } from './group.model';

export class Course {
  id: any;
  title: string = '';
  description?: string;
  published: boolean = false;
  hours_per_week?: number = 0;
  groups: Group[] = [];
  materials: CourseMat[] = [];
}
