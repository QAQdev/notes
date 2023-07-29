---
statistics: true
---

# 欢迎进入 oneko verse！😼💻

??? oneko "oneko 出没"
    <center>在本页面上，**oneko** 会跟着你一块跑动！</center>

!!! quote "一句"
    <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
    <div class="qiji-combo" align="center" style="font-size:23px;" id="poem_sentence"></div>
    <br>
    <div class="qiji-combo" align="right" style="font-size:18px;" id="poem_info"></div>
    <script type="text/javascript">
        jinrishici.load(function(result) {
            var sentence = document.querySelector("#poem_sentence")
            var info = document.querySelector("#poem_info")
            console.log(result.data.content)
            // 按逗号分割句子
            var sentences = result.data.content.split('，')
            // 修改sentence[0]的最后一个字符为句号，删除sentence[1]的最后一个字符
            sentences[0] = sentences[0].slice(0, -1) + '。'
            sentences[1] = sentences[1].slice(0, -1)
            console.log(sentences)
            // 拼接起来写回result.data.content
            result.data.content = sentences[0] + sentences[1]
            sentence.innerHTML = result.data.content
            info.innerHTML = result.data.origin.dynasty + ' ' + result.data.origin.author + '《' + result.data.origin.title + '》'
        });
    </script>

!!! note "杂谈"
    <div class="fang-zheng-song" style="font-size:30px;padding: 0 15px;">
        『
    </div>
    <div class="fang-zheng-song" style="font-family:;font-size:18px;padding: 0 70px;">
    那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。<br>
    可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。
    </div>
    <div class="fang-zheng-song" align="right" style="font-size:30px;padding: 0 15px;">
        』
    </div>     

!!! success inline "语雀"
    - 最早的笔记是记录在语雀上的，但现在准备逐步迁移了！ 
    - <div>
        <img src="https://dh.yunyingpai.com/wp-content/uploads/2022/01/4c427-www.yuque.com.png" style="width: 20px;height: auto;display: inline-block;vertical-align: middle">
        <div style="vertical-align: middle;display: inline-block;">
            <a href="https://www.yuque.com/oneko/something">
                **语雀**
            </a>
            ，欢迎来逛逛👋
        </div>
      </div>


!!! tip "看这里！"
    - 💡 记笔记的原因一方面是眼过一遍并不能掌握所有知识点，需要时常再回顾，另一方面是能提高我的表达能力
    - 😀 希望自己日有寸进！

!!! info "站点统计"
    <center>📑 页面数：{{pages}} </center>
    <center>✍️ 总字数：{{words}} </center>
    <center>#️⃣ 代码数：{{codes}} </center>
