import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface GradesTableItem {
  name: string;
  id: number;
  grade: number;
  present: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: GradesTableItem[] = [
  { id: 2, name: 'Ahmed', grade: 14, present:'yes'},
  { id: 1, name: 'Hammam', grade: 16 , present:'yes'},
  { id: 3, name: 'iskander', grade: 15, present:'yes' },
  { id: 2, name: 'Ahmed', grade: 14 , present:'yes'},
  { id: 1, name: 'Hammam', grade: 0, present:'no' },
  { id: 3, name: 'iskander', grade: 15, present:'yes' },
  { id: 2, name: 'Ahmed', grade: 14 , present:'yes'},
  { id: 1, name: 'Hammam', grade: 16 , present:'yes'},
  { id: 3, name: 'iskander', grade: 15, present:'yes' },
  { id: 2, name: 'Ahmed', grade: 0 , present:'no'},
  { id: 1, name: 'Hammam', grade: 16 , present:'yes'},
  { id: 3, name: 'iskander', grade: 15, present:'yes' },
];

/**
 * Data source for the GradesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GradesTableDataSource extends DataSource<GradesTableItem> {
  data: GradesTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<GradesTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: GradesTableItem[]): GradesTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: GradesTableItem[]): GradesTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'grade': return compare(a.grade, b.grade, isAsc);
        case 'present': return compare(a.present, b.present, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
