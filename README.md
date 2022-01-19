# FolderTree

This is a code challenge result, less than 4 hours were spent.

What could be done more?

- Add `node.service.ts` in which add http request to API (if API is needed) to fetch already existing tree, and replace hardcoded JSON with fetched one
- In that service add saving the tree method
- When API is added the logic of deletion should be rewritten. There should be a `delete` metod in the service, which would send node id to the backend and receive a new tree, so the whole tree is re-rendered on each deletion of the node. For now as it is written as a client-only logic, the original tree is being mutated, which is not really great and can cause issues if being unaware of that.

Style improvements:
- remove tree branches from the first layer
- branch style fix near `File/Folder` buttons


The only external library added is `normalize.css` to remove default styles.
