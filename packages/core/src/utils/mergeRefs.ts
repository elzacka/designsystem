import type { Ref, MutableRefObject, RefCallback } from 'react';

/**
 * Merges multiple refs into a single ref callback.
 * Useful when you need to attach multiple refs to a single element.
 *
 * @example
 * const MyComponent = forwardRef((props, ref) => {
 *   const localRef = useRef(null);
 *   return <div ref={mergeRefs(localRef, ref)} />;
 * });
 */
export function mergeRefs<T>(...refs: Array<Ref<T> | undefined | null>): RefCallback<T> {
  return (node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    });
  };
}
