/*拷贝内容添加声明*/
function setClipboardText(event) {
    event.preventDefault();
    var url = document.URL;
    var node = document.createElement("div");
    node.appendChild(
        window
            .getSelection()
            .getRangeAt(0)
            .cloneContents()
    );
    var htmlData =
        "<div>" +
        node.innerHTML +
        "<br/><br/>著作权归作者所有。<br/>" +
        "商业转载请联系作者获得授权，非商业转载请注明出处。<br/>" +
        "本文作者：洛九<br/>" +
        `原文连接：${url}<br/><br/>` +
        "</div>";
    var textData =
        window.getSelection().getRangeAt(0) +
        "\n\n著作权归作者所有。\n" +
        "商业转载请联系作者获得授权，非商业转载请注明出处。\n" +
        "本文作者：洛九\n" +
        `原文连接：${url}\n\n`;
    if (event.clipboardData) {
        event.clipboardData.setData("text/html", htmlData);
        event.clipboardData.setData("text/plain", textData);
    } else if (window.clipboardData) {
        return window.clipboardData.setData("text", textData);
    }
}

document.addEventListener("copy", function(e) {
    setClipboardText(e);
});
