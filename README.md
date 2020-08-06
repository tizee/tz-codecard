<div align="center">
<h3>tz-codecard</h3>
<p>A simple React souce code highlight card component using `highlight.js`.</p>

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
