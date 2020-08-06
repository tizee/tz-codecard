<div align="center">
<h3>tz-codecard</h3>
<p>A simple React souce code highlight card component using `highlight.js`.</p>

[![version][version-badge]][package]
[![build][github-badge]][build]
[![codecov][codecov-badge]][codecov]
[![MIT License][license-badge]][license]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)

![demo](https://github.com/tizee/tz-codecard/blob/master/img/codecard.png)

</div>

### Usage

```typescript
import { CodeCard } from 'tz-codecard';
import 'highlight.js/styles/darcula.css';

const code = 'let a = 1;';

export const Demo = () => (
  <CodeCard languages={['javascript']}>{code}</CodeCard>
);
```

[build]: https://github.com/tizee/tz-codecard/actions?query=workflow%3Abuild
[github-badge]: https://github.com/tizee/tz-codecard/workflows/build/badge.svg?event=push
[package]: https://www.npmjs.com/package/tz-codecard
[version-badge]: https://img.shields.io/npm/v/tz-codecard.svg?style=flat-square
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[license]: https://github.com/tizee/tz-codecard/blob/master/LICENSE
[license-badge]: https://img.shields.io/npm/l/tz-codecard.svg?style=flat-square
[codecov-badge]: https://codecov.io/gh/tizee/tz-codecard/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/tizee/tz-codecard
