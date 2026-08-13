/**
 * Compares the month and day of a given date to today's date.
 */
export function isBirthdayToday(dateOfBirth: string | null): boolean {
  if (!dateOfBirth) return false;
  
  const today = new Date();
  const dob = new Date(dateOfBirth);
  
  if (isNaN(dob.getTime())) return false;
  
  return today.getMonth() === dob.getMonth() && today.getDate() === dob.getDate();
}

/**
 * Calculates days until the next occurrence of a birthday.
 */
export function getDaysUntilBirthday(dateOfBirth: string | null): number {
  if (!dateOfBirth) return -1;
  
  const dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) return -1;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  
  // If birthday has passed this year, next one is next year
  if (nextBirthday < today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }
  
  const diffTime = nextBirthday.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Checks if a birthday is within the next N days.
 */
export function isBirthdayInRange(dateOfBirth: string | null, daysAhead: number): boolean {
  if (!dateOfBirth) return false;
  const daysUntil = getDaysUntilBirthday(dateOfBirth);
  return daysUntil >= 0 && daysUntil <= daysAhead;
}

/**
 * Calculates current age based on date of birth.
 */
export function calculateAge(dateOfBirth: string | null): number | null {
  if (!dateOfBirth) return null;
  
  const dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) return null;
  
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Formats a birthday to "Aug 13" format.
 */
export function formatBirthday(dateOfBirth: string | null): string {
  if (!dateOfBirth) return '';
  
  const dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) return '';
  
  return dob.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Returns a list of members sorted by upcoming birthday within the specified days.
 */
export function getUpcomingBirthdays<T extends { date_of_birth: string | null }>(
  members: T[],
  daysAhead: number = 30
): T[] {
  return members
    .filter(member => isBirthdayInRange(member.date_of_birth, daysAhead))
    .sort((a, b) => {
      const daysA = getDaysUntilBirthday(a.date_of_birth);
      const daysB = getDaysUntilBirthday(b.date_of_birth);
      return daysA - daysB;
    });
}
