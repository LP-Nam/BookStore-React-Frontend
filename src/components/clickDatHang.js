// import $ from 'jquery';


// export function clickDatHang() {
//     $(document).ready(() => {
//         let $button = $('#test');

//         $button.on('click', function() {
//             var $this = $(this);
//             if($this.hasClass('active') || $this.hasClass('success')) {
//                 return false;
//             }
//             $this.addClass('active');
//             setTimeout(()=> {
//                 $this.addClass('loader');
//             }, 8000);
//             setTimeout(()=> {
//                 $this.removeClass('loader active');
//                 $this.text('Thành Công!');
//                 $this.addClass('success animated pulse');
//             }, 1600);
//             setTimeout(()=> {
//                 $this.text('Đặt vào giỏ hàng');
//                 $this.removeClass('success animated pulse');
//                 $this.blur();
//             }, 2900);
//         });
//     });
// }