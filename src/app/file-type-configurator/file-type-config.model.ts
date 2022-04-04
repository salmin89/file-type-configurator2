export interface FilesFormatsDefinitionConfig {
  filesFormatsDefinition: FilesFormatsDefinition[];
}

export interface FilesFormatsDefinition extends isNew {
  extension: string;
  mimeType: string;
  matching: Matching;
}

interface isNew {
  isNew?: boolean;
}

export interface Matching {
  patterns: Pattern[];
}

export interface Pattern {
  sequence: number[];
  offset: number;
}
