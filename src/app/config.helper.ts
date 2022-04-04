import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FilesFormatsDefinition, Pattern } from './file-type-configurator/file-type-config.model';

const isValidHex = (ctrl: FormControl) => {
  try {
    ctrl.value.split(' ').forEach((v) => {
      const hex = Number(v);
      if (isNaN(hex)) throw new Error();
    });

    return null;
  } catch (error) {
    return {
      invalidHex: true,
    };
  }
};

const EMPTY_PATTERN = { sequence: [], offset: 0 };
export const buildPattern = (pattern: Pattern = EMPTY_PATTERN) => {
  return new FormGroup({
    sequence: new FormControl(pattern.sequence.map(numberToHexStrMapper).join(' '), [Validators.required, isValidHex]),
    offset: new FormControl(pattern.offset, [Validators.required, Validators.min(0)]),
  });
};

export const numberToHexStrMapper = (seq: Number) => `0x${seq.toString(16)}`;

export const EMPTY_DEF: FilesFormatsDefinition = {
  isNew: true,
  extension: '',
  mimeType: '',
  matching: {
    patterns: [],
  },
};
