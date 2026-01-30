import React, {type ReactNode} from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): ReactNode {
  const noLineNumbers = props.metastring?.includes("noLineNumbers") ?? false;
  return (
    <>
      <CodeBlock {...props} showLineNumbers={!noLineNumbers}/>
    </>
  );
}
