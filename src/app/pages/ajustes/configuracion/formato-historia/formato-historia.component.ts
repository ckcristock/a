import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formato-historia',
  templateUrl: './formato-historia.component.html',
  styleUrls: ['./formato-historia.component.scss'],
})
export class FormatoHistoriaComponent implements OnInit {
  forma: FormGroup;
  constructor(private fb: FormBuilder) {}
  operatorsSelect = ['equal', 'not equal'];
  operators = ['is equeal to', 'is not equal to', 'begins with'];
  typeInputs = ['text', 'date', 'check', 'select'];

  id = 0;
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forma = this.fb.group({
      questions: this.fb.array([this.makeCuestion()]),
    });
    this.forma.valueChanges.subscribe((r) => console.log(r));
  }

  makeCuestion() {
    this.id += 1;
    let id = this.id;
    return this.fb.group({
      id,
      title: '¿hello?',
      type: 'text',
      options: this.fb.array([this.fb.group({ value: '' })]),
      rules: this.fb.array([
        this.fb.group({
          logic: 'and',
          level2: this.fb.array([this.makeCondition()]),
        }),
      ]),
    });
  }

  get questions() {
    return this.forma.get('questions') as FormArray;
  }
  addQuestion() {
    this.questions.push(this.makeCuestion());
  }
  addRule(condition: FormArray) {
       condition.push(this.makeCondition());
  }
  makeCondition() {
    let g = this.fb.group({
      logic: 'and',
      operator: 'equal',
      id_question_selected: '',
      question_selected: '',
    });
    g.get('id_question_selected').valueChanges.subscribe((r) => {
      const questions = this.forma.get('questions') as FormArray;
      const question = questions.controls.find(
        (x: any) => x.controls.id.value == r
      );

      console.log(question);
      g.patchValue({
        question_selected: question,
      });
      console.log(g);
    });
    return g;
  }

  addOption(options: FormArray) {
    options.push(this.fb.group({ value: '' }));
  }

  addRu(questionCondition: FormArray) {
    console.log(questionCondition);
    
    let g = this.fb.group({
      logic: 'and',
      level2: this.fb.array([this.makeCondition()]),
    });
    questionCondition.push(g);
  }
  delete(col: FormArray, pos) {
    console.log(col);
    col.removeAt(pos);
  }
}
