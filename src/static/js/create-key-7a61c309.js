import { W as isVNode, C as Comment, F as Fragment } from "./main-3c05bb2c.js";
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) {
      return true;
    }
    if (child.type === Comment) {
      return false;
    }
    if (child.type === Fragment && !ensureValidVNode(child.children)) {
      return false;
    }
    return true;
  }) ? vnodes : null;
}
function resolveWrappedSlot(slot, wrapper) {
  const children = slot && ensureValidVNode(slot());
  return wrapper(children || null);
}
function isSlotEmpty(slot) {
  return !(slot && ensureValidVNode(slot()));
}
function createKey(prefix, suffix) {
  return prefix + (suffix === "default" ? "" : suffix.replace(/^[a-z]/, (startChar) => startChar.toUpperCase()));
}
createKey("abc", "def");
export {
  createKey as c,
  isSlotEmpty as i,
  resolveWrappedSlot as r
};
