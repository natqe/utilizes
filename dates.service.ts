import * as moment from 'moment'
import { times } from 'lodash'

const today = moment()

export const
  lengthSeconds = (start: string, end: string) => {

    const
      momentStart = moment(start, 'HH:mm'),
      momentEnd = moment(end, 'HH:mm'),
      lengthSeconds = momentEnd.diff(momentStart, 'seconds')

    return lengthSeconds

  },
  secondsToTime = (seconds: number) => moment().startOf('day').seconds(seconds).format('H:mm'),
  amountOfWeekDaysInMonth = (weekday = today.get('d'), month = today.get('M'), year = today.get('year')) => {

    const
      date = moment(`${year}/${month + 1}`).date(1),
      dif = (7 + (weekday - date.weekday())) % 7 + 1

    return Math.floor((date.daysInMonth() - dif) / 7) + 1

  },
  amountOfWeekDaysInYear = (day: number, year?: number) => times(12, month => amountOfWeekDaysInMonth(day, month, year)).reduce((prev, curr) => prev + curr),
  secondsToHours = (seconds: number) => seconds / 60 / 60,
  isPast = (date: Date) => date.getTime() - new Date().getTime() < 0
