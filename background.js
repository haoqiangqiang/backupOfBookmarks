// 获取书签树
const getBookmarksTree = () => {
  console.log('change');
  chrome.bookmarks.getTree((data) => {
    console.log('data is', data);
  })
}
// 当创建书签或者书签夹夹时
chrome.bookmarks.onCreated.addListener(() => {
  getBookmarksTree();
});
// 当书签或者书签夹发生改变时触发该事件。注意： 近期只有标题和url发生改变时，才触发该事件
chrome.bookmarks.onChanged.addListener(() => {
  getBookmarksTree();
});
// 由于UI中的顺序发生改变时，书签夹会改变其子节点的顺序，此时会触发该事件。函数 move()不会触发该事件
chrome.bookmarks.onChildrenReordered.addListener(() => {
  getBookmarksTree();
});
// 当书签或者书签夹被移动到其他父书签夹时，触发该事件
chrome.bookmarks.onMoved.addListener(() => {
  getBookmarksTree();
});
// 当书签和书签夹被删除时，触发该事件。当递归删除书签夹时，只会触发一个节点删除事件，它的子节点不会触发节点删除事件
chrome.bookmarks.onRemoved.addListener(() => {
  getBookmarksTree();
});
// 当导入书签结束时，会触发该事件 
chrome.bookmarks.onImportEnded.addListener(() => {
  getBookmarksTree();
});
