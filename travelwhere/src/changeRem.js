// !function (e, t) { function n() { t.body ? t.body.style.fontSize = 12 * o + "px" : t.addEventListener("DOMContentLoaded", n) } function d() { var e = i.clientWidth / 10; i.style.fontSize = e + "px" } var i = t.documentElement, o = e.devicePixelRatio || 1; if (n(), d(), e.addEventListener("resize", d), e.addEventListener("pageshow", function (e) { e.persisted && d() }), o >= 2) { var a = t.createElement("body"), s = t.createElement("div"); s.style.border = ".5px solid transparent", a.appendChild(s), i.appendChild(a), 1 === s.offsetHeight && i.classList.add("hairlines"), i.removeChild(a) } }(window, document);



// const baseSize = 32
// 设置 rem 函数
// function setRem () {
 // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//  const scale = document.documentElement.clientWidth / 750
 // 设置页面根节点字体大小
//  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
// }
// 初始化
// setRem()
// 改变窗口大小时重新设置 rem
// window.onresize = function () {
//  setRem()
// }