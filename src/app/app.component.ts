import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  json = {
    filesFormatsDefinition: [
      {
        extension: 'prt',
        mimeType: 'application/pro_eng',
        matching: {
          patterns: [
            {
              sequence: [0x53, 0x50, 0x4c, 0x4d, 0x53, 0x53, 0x54, 0x52, 0x06],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'stp',
        mimeType: 'application/STEP',
        matching: {
          patterns: [
            {
              sequence: [
                0x49, 0x53, 0x4f, 0x2d, 0x31, 0x30, 0x33, 0x30, 0x33, 0x2d, 0x32, 0x31, 0x3b, 0xd, 0xa, 0x48, 0x45, 0x41, 0x44, 0x45, 0x52,
                0x3b, 0xd, 0xa,
              ],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/CAD Vantage drawing', //application/octet-stream
        matching: {
          patterns: [
            {
              sequence: [0x43, 0x41, 0x44, 0x20, 0x56, 0x61, 0x6e, 0x74, 0x61, 0x67, 0x65, 0x20],
              offset: 0,
            },
            {
              sequence: [0x2e],
              offset: 13,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/MICROCAD Drawing', //application/octet-stream
        matching: {
          patterns: [
            {
              sequence: [0x0a, 0x00],
              offset: 0,
            },
            {
              sequence: [0x00],
              offset: 3,
            },
            {
              sequence: [0x00],
              offset: 5,
            },
            {
              sequence: [0x00, 0x01],
              offset: 9,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/PC-Draft-CAD drawing (v3.x)',
        matching: {
          patterns: [
            {
              sequence: [0x00, 0x00, 0x00, 0x00],
              offset: 5,
            },
            {
              sequence: [0x00],
              offset: 10,
            },
            {
              sequence: [0x00],
              offset: 12,
            },
            {
              sequence: [0x00, 0x00, 0x00, 0x80, 0x3d],
              offset: 14,
            },
            {
              sequence: [0x80, 0x3e, 0xf4, 0x33],
              offset: 63,
            },
            {
              sequence: [0x80, 0x3e, 0xf4, 0x33],
              offset: 111,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/x-autocad',
        matching: {
          patterns: [
            {
              sequence: [0x4d, 0x43, 0x30, 0x2e],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/x-autocad',
        matching: {
          patterns: [
            {
              sequence: [0x41, 0x43, 0x32, 0x2e],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/x-autocad',
        matching: {
          patterns: [
            {
              sequence: [0x41, 0x43, 0x31, 0x2e],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/x-autocad', //AutoCAD R2.22-20xx Drawing (generic)
        matching: {
          patterns: [
            {
              sequence: [0x41, 0x43, 0x31, 0x30],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'igs',
        mimeType: 'application/Indigo Renderer Scene',
        matching: {
          patterns: [
            {
              sequence: [
                0x3c, 0x3f, 0x78, 0x6d, 0x6c, 0x20, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x3d, 0x22, 0x31, 0x2e, 0x30, 0x22, 0x20,
                0x65, 0x6e, 0x63, 0x6f, 0x64, 0x69, 0x6e, 0x67, 0x3d, 0x22, 0x75, 0x74, 0x66, 0x2d, 0x38, 0x22, 0x3f, 0x3e, 0x0d, 0x0a,
              ],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'igs',
        mimeType: 'application/Indigo Renderer Scene',
        matching: {
          patterns: [
            {
              sequence: [
                0x3c, 0x3f, 0x78, 0x6d, 0x6c, 0x20, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x3d, 0x22, 0x31, 0x2e, 0x30, 0x22, 0x20,
                0x65, 0x6e, 0x63, 0x6f, 0x64, 0x69, 0x6e, 0x67, 0x3d, 0x22, 0x75, 0x74, 0x66, 0x2d, 0x38, 0x22, 0x3f, 0x3e, 0x0d, 0x0a,
              ],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'jt',
        mimeType: 'application/Jupiter Tesselation 3D visualization format',
        matching: {
          patterns: [
            {
              sequence: [0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x20],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'IGS/IGES',
        mimeType: 'model/iges',
        matching: {
          patterns: [
            {
              sequence: [0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x53],
              offset: 63,
            },
            {
              sequence: [0x31],
              offset: 79,
            },
          ],
        },
      },
      {
        extension: 'CATPart/CATProduct/CATDrawing/cgr/3dxml',
        mimeType: 'application/octet-stream',
        matching: {
          patterns: [
            {
              sequence: [0x56, 0x35, 0x5f, 0x43, 0x46, 0x56, 0x32, 0x00],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'X_B/X_T',
        mimeType: 'model/Parasolid-model',
        matching: {
          patterns: [
            {
              sequence: [
                0x2a, 0x2a, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52,
                0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c,
                0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x2a,
              ],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'dwg',
        mimeType: 'application/IBM CAD/3X drawing', //application/octet-stream
        matching: {
          patterns: [
            {
              sequence: [
                0x41, 0x43, 0x43, 0x4f, 0x52, 0x44, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x49, 0x42, 0x4d, 0x20,
                0x43, 0x41, 0x44, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20,
                0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x56, 0x45, 0x52, 0x2e, 0x20,
              ],
              offset: 6,
            },
          ],
        },
      },
      {
        extension: 'catdrawing',
        mimeType: 'application/CATIA Drawing (v5 r16-28)',
        matching: {
          patterns: [
            {
              sequence: [0x56, 0x35, 0x5f, 0x43, 0x46, 0x56, 0x32, 0x00],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'plmxml',
        mimeType: 'application/plmxml',
        matching: {
          patterns: [
            {
              sequence: [
                0x3c, 0x3f, 0x78, 0x6d, 0x6c, 0x20, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x3d, 0x22, 0x31, 0x2e, 0x30, 0x22, 0x20,
              ],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'prt',
        mimeType: 'application/prt megacad',
        matching: {
          patterns: [
            {
              sequence: [0x4d, 0x65, 0x67, 0x61, 0x43, 0x61, 0x64],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'cgm',
        mimeType: 'application/cgm computer graphics metafile',
        matching: {
          patterns: [
            {
              sequence: [0x00, 0x3f, 0x00],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'cgm',
        mimeType: 'application/cgm Computer Graphics Metafile (Clear Text)',
        matching: {
          patterns: [
            {
              sequence: [0x42],
              offset: 0,
            },
            {
              sequence: [0x4d],
              offset: 3,
            },
          ],
        },
      },
      {
        extension: 'cgr',
        mimeType: 'application/Quest3D data',
        matching: {
          patterns: [
            {
              sequence: [0x41, 0x43, 0x54, 0x46],
              offset: 0,
            },
            {
              sequence: [0x5a, 0x49, 0x4f, 0x53],
              offset: 24,
            },
            {
              sequence: [0x5a, 0x49, 0x4e, 0x53],
              offset: 36,
            },
            {
              sequence: [0x5a, 0x49, 0x43, 0x42],
              offset: 48,
            },
          ],
        },
      },
      {
        extension: 'elf',
        mimeType: 'application/jpeg samsung format',
        matching: {
          patterns: [
            {
              sequence: [0x7f, 0x45, 0x4c, 0x46],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: '3mf',
        mimeType: 'application/3D Manufacturing Format model',
        matching: {
          patterns: [
            {
              sequence: [0x50, 0x4b, 0x03, 0x04],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'amf',
        mimeType: 'application/Advanced Module Format',
        matching: {
          patterns: [
            {
              sequence: [0x41, 0x4d, 0x46],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'amf',
        mimeType: 'application/L3DT Attributes Map File',
        matching: {
          patterns: [
            {
              sequence: [0x4c, 0x33, 0x44, 0x54, 0x08, 0x02],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'amf',
        mimeType: 'application/Additive Manufacturing Format',
        matching: {
          patterns: [
            {
              sequence: [
                0x3c, 0x3f, 0x78, 0x6d, 0x6c, 0x20, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x3d, 0x22, 0x31, 0x2e, 0x30, 0x22, 0x20,
                0x65, 0x6e, 0x63, 0x6f, 0x64, 0x69, 0x6e, 0x67, 0x3d, 0x22,
              ],
              offset: 0,
            },
          ],
        },
      },
      {
        extension: 'rar',
        mimeType: 'application/vnd.rar',
        matching: {
          patterns: [
            {
              sequence: [0x52, 0x61, 0x72, 0x21, 0x1a, 0x07, 0x00],
              offset: 0,
            },
          ],
        },
      },
    ],
  };
}
