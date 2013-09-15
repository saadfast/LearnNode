
function boldCall(textBlock)
{
                                                //text area ID parameter
    ChangeSelection('MainTextArea',"<br>");
   
}

function doGetCaretPosition(ctrl) {

    var CaretPos = 0;
    // IE Support
    if (document.selection) {

        ctrl.focus();
        var Sel = document.selection.createRange();

        Sel.moveStart('character', -ctrl.value.length);

        CaretPos = Sel.text.length;
    }
        // Firefox support
    else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;

    return (CaretPos);

}

function setCaretPosition(ctrl, pos) {

    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}

function ChangeSelection(textbox) {
    var textComponent = document.getElementById(textbox);
    var selectedText;
    var allText = document.getElementById(textbox).value;
    // IE version
    if (document.selection != undefined) {
        textComponent.focus();
        var sel = document.selection.createRange();
     
        selectedText = sel.text;

        allText.value = allText.value.substring(0, sel.boundingLeft) + "<b>" + selectedText;

    }
        // Mozilla version
    else if (textComponent.selectionStart != undefined) {
        var startPos = textComponent.selectionStart;
        var endPos = textComponent.selectionEnd;
        selectedText = textComponent.value.substring(startPos, endPos);
        if (selectedText.search(arguments[1]) == -1 && selectedText.search(arguments[2]) == -1)
             allText = allText.substring(0, startPos) + arguments[1] + selectedText + arguments[2] + allText.substring(endPos,allText.length);
    }

    document.getElementById(textbox).value = allText;
}

function InsertTag(textbox) {
    var textComponent = document.getElementById(textbox);
    var selectedText;
    var allText = document.getElementById(textbox).value;
    // IE version
    if (document.selection != undefined) {
        textComponent.focus();
        var sel = document.selection.createRange();

        selectedText = sel.text;

        allText.value = allText.value.substring(0, sel.boundingLeft) + "<b>" + selectedText;

    }
        // Mozilla version
    else if (textComponent.selectionStart != undefined) {
        var startPos = textComponent.selectionStart;
        var endPos = textComponent.selectionEnd;
        selectedText = textComponent.value.substring(startPos, endPos);
        if (selectedText.search(arguments[1]) == -1)
            allText = allText.substring(0, startPos) + arguments[1] + selectedText + allText.substring(endPos, allText.length);
    }

    document.getElementById(textbox).value = allText;
}



function ShowSelection() {
    var textComponent = document.getElementById('MainTextArea');
    var selectedText;
    var allText = document.getElementById('MainTextArea').value;
    // IE version
    if (document.selection != undefined) {
        textComponent.focus();
        var sel = document.selection.createRange();

        selectedText = sel.text;

        allText.value = allText.value.substring(0, sel.boundingLeft) + "<b>" + selectedText;

    }
        // Mozilla version
    else if (textComponent.selectionStart != undefined) {
        var startPos = textComponent.selectionStart;
        var endPos = textComponent.selectionEnd;
        selectedText = textComponent.value.substring(startPos, endPos);
        if (selectedText.search("<b>") == -1 && selectedText.search("</b>") == -1)
            allText = allText.substring(0, startPos) + "<b>" + selectedText + "</b>" + allText.substring(endPos, allText.length);
    }

    document.getElementById('MainTextArea').value = allText;
}

function Render()
{
    var oldHTML = document.getElementById('MainTextArea').value;
   // var LabelHTML = document.getElementById('Render').innerHTML;
    document.getElementById('Render').innerHTML = oldHTML;
}

function KeyPressed(textArea)
{
    var len = arguments.length;
    var iterator = 1;
    while (iterator <= len)
    {
        if (event.keyCode == arguments[iterator])               //enter pressed
        {
            InsertTag(textArea, arguments[iterator + 1]);
        }
        iterator += 2;
    }
    
}