# parse-paste

parse clipboard data when trigger paste event

# install

```shell
pnpm i parse-paste
```

# usage

```tsx
import { parsePaste } from "parse-paste";

export default () => (
  <textarea
    placeholder="paste anything here"
    onPaste={(e) => {
      const result = parsePaste(e);
      console.log(222, result);
    }}
  />
);
```
