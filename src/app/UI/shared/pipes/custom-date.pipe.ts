import { Pipe, PipeTransform } from '@angular/core';

/**
 * CustomDate Pipe
 * 
 * Transforms dates into different formats:
 * - 'short': DD/MM/YYYY
 * - 'medium': DD de Mes, YYYY
 * - 'long': Día de la semana, DD de Mes del YYYY
 * 
 * @example
 * {{ date | customDate:'short' }}
 * {{ date | customDate:'medium' }}
 * {{ date | customDate:'long' }}
 */
@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {
  private readonly months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  private readonly days = [
    'domingo', 'lunes', 'martes', 'miércoles',
    'jueves', 'viernes', 'sábado'
  ];

  transform(value: any, format: 'short' | 'medium' | 'long' = 'short'): string {
    if (!value) {
      return 'Fecha no proporcionada';
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return 'Fecha inválida';
    }

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const monthName = this.months[date.getMonth()];
    const year = date.getFullYear();
    const dayName = this.days[date.getDay()];

    switch (format) {
      case 'short':
        return `${day}/${month}/${year}`;
      case 'medium':
        return `${day} de ${monthName}, ${year}`;
      case 'long':
        return `${dayName}, ${day} de ${monthName} del ${year}`;
      default:
        return `${day}/${month}/${year}`;
    }
  }
}


// <p>Fecha corta: {{ currentDate | customDate:'short' }}</p>