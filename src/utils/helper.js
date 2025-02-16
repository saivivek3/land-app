export function toIndianLakhs(num) {
  return (num / 100000).toFixed(2) + ' Lakhs';
}

export const formatDateRange = dateRange => {
  const formatDate = date => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  return {
    from: formatDate(dateRange.from),
    to: formatDate(dateRange.to),
  };
};
