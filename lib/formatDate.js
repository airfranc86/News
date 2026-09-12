const MONTHS = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

export function formatDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
