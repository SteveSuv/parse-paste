# parse-paste

parse clipboard data when trigger paste event

# install

```shell
pnpm i parse-paste
```

# usage

```tsx
import { parsePaste } from "parse-paste";

export const Demo = () => (
  <textarea
    placeholder="paste anything here"
    onPaste={(e) => {
      const result = parsePaste(e);
      console.log(result);
    }}
  />
);
```
