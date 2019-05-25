function copyEmail(element) {
    var $get = $("<input>");
    $("body").append($temp);
    $get.val($(element).text()).select();
    document.execCommand("copy");
    $get.remove()
}