import { useMemo } from 'react';
import { isBirthdayToday, getUpcomingBirthdays } from '@/utils/birthday';
import { UPCOMING_BIRTHDAY_DAYS } from '@/utils/constants';

export function useBirthdays<T extends { date_of_birth: string | null }>(members: T[]) {
  const todaysBirthdays = useMemo(() => {
    return members.filter(member => isBirthdayToday(member.date_of_birth));
  }, [members]);

  const upcomingBirthdays = useMemo(() => {
    // Get upcoming birthdays within the constant threshold (e.g. 30 days)
    // Filter out today's birthdays from upcoming list
    const upcoming = getUpcomingBirthdays(members, UPCOMING_BIRTHDAY_DAYS);
    return upcoming.filter(member => !isBirthdayToday(member.date_of_birth));
  }, [members]);

  return {
    todaysBirthdays,
    upcomingBirthdays
  };
}
