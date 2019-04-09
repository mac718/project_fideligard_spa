export const ON_DATE_WIDGET_CHANGE = 'ON_DATE_WIDGET_CHANGE';

export function onDateWidgetChange(date) {
  return {
    type: ON_DATE_WIDGET_CHANGE,
    date
  }
}