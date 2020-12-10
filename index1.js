var a1 = document.getElementById('a1'); //通过id获得元素
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var tt3 = document.getElementById('tt3');
//注册事件 处理程序
a1.onclick = function() {
    tt3.innerHTML = "<br>社团部长：侯卫东  <br/><p>社团副部长:曹黎明</p>";
}
a2.onclick = function() {
    tt3.innerHTML = "<br/>社团成员有：阿拉善、江申、李思敏、徐盛<br/>";
}
a3.onclick = function() {
    tt3.innerHTML = "<br/>社团的基本介绍：<br/><br/>在通过我们的服务来引导广大学生并切实提高他们处理计算机操作信息的处理能力，提升他们的计算机操作信息处理能力。为广大师范生构建一个旨在提高他们使用并掌握计算机操作信息技术的平台，切实提高他们的现代计算机信息技能，为迎接社会信息化的社会。计算机技术和计算机信息作为信息文明的两大代表技术，极大地改变了我们的生活。给处在新世纪、新时期的学子们带来了机遇。同时也对我们提出了挑战。如果我们能够掌握这两门技术，并在学习与生活中很好的运用，毋庸置疑，我们将取得极大的成功。";
}