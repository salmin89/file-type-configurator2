import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilesFormatsDefinition, FilesFormatsDefinitionConfig } from './file-type-config.model';
import { buildPattern, EMPTY_DEF } from '../config.helper';

@Component({
  selector: 'app-file-type-configurator',
  templateUrl: './file-type-configurator.component.html',
})
export class FileTypeConfiguratorComponent implements OnInit {
  @Input() value: FilesFormatsDefinitionConfig;

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  get filesFormatsDefinition() {
    return this.form.get('filesFormatsDefinition') as FormArray;
  }

  ngOnInit(): void {
    this.buildForm(this.value);
  }

  buildForm(value: FilesFormatsDefinitionConfig) {
    this.form = this.formBuilder.group({
      filesFormatsDefinition: this.formBuilder.array(value.filesFormatsDefinition.map((def) => this.buildFileFormatDefinition(def))),
    });
  }

  buildFileFormatDefinition(def: FilesFormatsDefinition = EMPTY_DEF) {
    return this.formBuilder.group({
      isNew: [
        {
          value: def.isNew,
          disabled: true,
        },
      ],
      extension: [def.extension, [Validators.required]],
      mimeType: [def.mimeType, [Validators.required]],
      matching: this.formBuilder.group({
        patterns: this.formBuilder.array(
          def.matching.patterns.map((pattern) => buildPattern(pattern)),
          [Validators.required]
        ),
      }),
    });
  }

  save(def: FormGroup) {
    console.log(def.value);
  }

  cancel(index: number) {
    const defCtrl = this.form.get(['filesFormatsDefinition', index]);

    const patternsCtrl = defCtrl.get('matching').get('patterns') as FormArray;
    patternsCtrl.clear();

    const { matching, ...defaultValue } = this.value.filesFormatsDefinition[index];
    defCtrl.reset({
      ...defaultValue,
      ...matching,
    });

    matching.patterns.forEach((p) => {
      patternsCtrl.push(buildPattern(p));
    });
  }

  trackByIndex(index: number) {
    return index;
  }

  addDef() {
    this.filesFormatsDefinition.push(this.buildFileFormatDefinition());
  }
}
