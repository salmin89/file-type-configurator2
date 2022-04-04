import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { buildPattern } from '../config.helper';

@Component({
  selector: 'app-config-matching-group',
  templateUrl: './config-matching-group.component.html',
})
export class ConfigMatchingGroupComponent implements OnInit {
  @Input() matchingGroup: FormGroup;
  @Input() defIndex: number;

  get patterns() {
    return this.matchingGroup.get('patterns') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  addPattern() {
    this.patterns.insert(0, buildPattern());
  }

  deletePattern(index: number) {
    this.patterns.removeAt(index);
  }

  trackByIndex(index: number) {
    return index;
  }
}
