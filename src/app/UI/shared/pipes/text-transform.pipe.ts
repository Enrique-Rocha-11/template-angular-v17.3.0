import { Pipe, PipeTransform } from '@angular/core';

type TransformType = 'uppercase' | 'lowercase' | 'capitalize';

/**
 * TextTransform Pipe
 * 
 * Transforms text into different formats:
 * - 'uppercase': Converts text to upper case
 * - 'lowercase': Converts text to lower case
 * - 'capitalize': Capitalizes first letter of each word
 * 
 * @example
 * {{ text | textTransform:'uppercase' }}
 * {{ text | textTransform:'lowercase' }}
 * {{ text | textTransform:'capitalize' }}
 */
@Pipe({
  name: 'textTransform',
  standalone: true
})
export class TextTransformPipe implements PipeTransform {
  transform(value: string | null | undefined, type: TransformType = 'uppercase'): string {
    if (value == null) {
      return '';
    }

    switch (type) {
      case 'uppercase':
        return value.toUpperCase();
      case 'lowercase':
        return value.toLowerCase();
      case 'capitalize':
        return value
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      default:
        return value;
    }
  }


//   <p>Uppercase: {{ sampleText | textTransform:'uppercase' }}</p>
}