
function fixTop(el) {
  console.log(el)
  function handleScroll() {
    console.log('监听了吗')
    let offsetHeight = el.offsetHeight;
    let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > offsetHeight) {
      el.style.position = 'fixed';
      el.style.left = '0';
      el.style.top = '0';
    } else {
      el.style.position = 'none';
    }
  }

  //监听
  window.addEventListener('scroll', function (event) {
    handleScroll()
  });
  //溢出监听
  // el.on('$destroy', function () {
  //   window.removeEventListener('scroll', function () {
  //     console.log('不监听')
  //   })
  // });
}

export default {
  fixTop:fixTop
}
