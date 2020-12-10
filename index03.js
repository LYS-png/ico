    window.onload = function()
    {
        var Msg = document.getElementById("msg");
        var Btn = document.getElementById("btn");
        var Msg_c = document.getElementById("msg_txt");
        var Ul = document.createElement("ul"); //定义一个有序的列表
        Msg_c.appendChild(Ul);                 //向Msg_txt中添加UL节点
        
        Btn.onclick = function () {
            if(Msg.value==''){
                alert('无效发布');
                return;
            } 
            else
            {
            //获取留言栏Msg_txt中的内容 
            var MsgValue = Msg.value;
            //创建li
            var Li = document.createElement("li");
            // 在li赋值MsgValue
            Li.innerHTML = MsgValue; 
            //获得Ul中的所有li元素
            var arrayLi = Ul.getElementsByTagName("li")
            if (arrayLi.length > 0) 
            {
                Ul.insertBefore(Li, arrayLi[0]);
            }
            else 
            {
                Ul.appendChild(Li);
            }
            Msg.value = ''; //清空留言栏 
            }
        }
    }
