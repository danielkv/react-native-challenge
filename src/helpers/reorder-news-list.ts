import { NewModel } from '../models/new.model';
import dayjs from 'dayjs';
import _ from 'lodash';

export type OrderType = {
    field: string;
    direction: 'ASC' | 'DESC';
};

export function sortNewsList(newsLists: NewModel[], order: OrderType): NewModel[] {
    const clonedList = _.cloneDeep(newsLists);
    let sortedList: NewModel[];

    switch (order.field) {
        case 'date':
            sortedList = clonedList.sort(sortByDate);
            break;
        default:
            sortedList = clonedList.sort((a, b) => a[order.field].localeCompare(b[order.field]));
    }

    return order.direction === 'DESC' ? sortedList.reverse() : sortedList;
}

function sortByDate(a: NewModel, b: NewModel) {
    const dateA = dayjs(a.date);
    const dateB = dayjs(b.date);

    if (dateA.isBefore(dateB)) return -1;
    if (dateA.isAfter(dateB)) return 1;
    return 0;
}
