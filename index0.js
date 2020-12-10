//点击按钮div里面的文字发生变化
        //获取元素
        //  事件源
        var btn1 = document.getElementById('bt1');
        var btn2 = document.getElementById('bt2');
        var tt1 = document.getElementById('tt1');
        //注册事件 处理程序
        btn1.onclick = function() {
            tt1.innerText = "'看上的技能'";
        }
        btn2.onclick = function() {
            tt1.innerText = "'阿诗丹顿；ad就kdah'";
        }