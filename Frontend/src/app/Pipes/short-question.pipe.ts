import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortQuestion',
  standalone: true
})
export class ShortQuestionPipe implements PipeTransform {

  transform(question: string, length: number): string {

    if (question.length <= length) {
      return question;
    }
    return question.slice(0, length) + '...';
  }
}
