import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentQuestionIndex = 0;
  questions: any[] = [
    {
      question: 'What is JSX?',
      options: ['A JavaScript extension for XML', 'A new programming language', 'A JSON syntax extension', 'A React component'],
      correctAnswer: 'A JavaScript extension for XML'
    },
    {
      question: 'What is the basic JSX syntax?',
      options: ['Enclosed in curly braces {}', 'Enclosed in square brackets []', 'Enclosed in angle brackets <>', 'Enclosed in parentheses ()'],
      correctAnswer: 'Enclosed in angle brackets <>'
    },
    {
      question: 'What are JSX elements?',
      options: ['Plain JavaScript functions', 'React components', 'HTML-like syntax used with React', 'All of the above'],
      correctAnswer: 'HTML-like syntax used with React'
    },
    {
      question: 'What is the process of embedding expressions in JSX called?',
      options: ['Interpolation', 'Concatenation', 'Expression nesting', 'Embedding'],
      correctAnswer: 'Interpolation'
    },
    {
      question: 'How are JSX attributes represented?',
      options: ['Using square brackets {}', 'Using double curly braces {{}}', 'Using camelCase', 'Using kebab-case'],
      correctAnswer: 'Using camelCase'
    },
    {
      question: 'What are JSX fragments used for?',
      options: ['To create comments in JSX', 'To group multiple JSX elements without adding an extra node to the DOM', 'To define inline styles in JSX', 'To import external JavaScript libraries'],
      correctAnswer: 'To group multiple JSX elements without adding an extra node to the DOM'
    },
    {
      question: 'In JSX, what is the purpose of curly braces {}?',
      options: ['To define an object literal', 'To represent an empty JSX element', 'To indicate a code block or expression', 'To create a loop in JSX'],
      correctAnswer: 'To indicate a code block or expression'
    },
    {
      question: 'What does JSX transpile to?',
      options: ['HTML', 'JavaScript function calls', 'CSS', 'JSON'],
      correctAnswer: 'JavaScript function calls'
    },
    {
      question: 'Can JSX be directly rendered in the browser?',
      options: ['Yes', 'No', 'cant say', 'data insuffitient'],
      correctAnswer: 'No'
    },
    {
      question: 'Which of the following statements is true about JSX?',
      options: ['JSX is a separate programming language.', 'JSX elements are strings.', 'JSX provides a syntax extension for JavaScript.', 'JSX is only used in Angular applications.'],
      correctAnswer: 'JSX provides a syntax extension for JavaScript.'
    },
    // Add more questions similarly
  ];
  selectedOption: string | null = null;
  score = 0;
  quizCompleted = false;

  ngOnInit(): void {
    // Initialize the component
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  nextQuestion(): void {
    // Check if the selected option is correct
    if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
      this.score++;
    }

    // Move to the next question or end the quiz
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedOption = null; // Reset selected option for the next question
    } else {
      this.quizCompleted = true;
    }
  }

  submitQuiz(): void {
    // Display the final score
    alert(`Your score is: ${this.score}`);
  }
}
