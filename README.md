<div align="center">
<h3>tz-codecard</h3>
<p>A simple React souce code highlight card component using `highlight.js`.</p>

[![codecov](https://codecov.io/gh/tizee/tz-codecard/branch/master/graph/badge.svg)](https://codecov.io/gh/tizee/tz-codecard)

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
