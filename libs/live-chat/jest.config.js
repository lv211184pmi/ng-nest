module.exports = {
  name: 'live-chat',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/live-chat',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
