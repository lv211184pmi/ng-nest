module.exports = {
  name: 'ng-nest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-nest',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
