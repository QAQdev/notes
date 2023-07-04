---
statistics: true
---

# 欢迎进入 oneko verse！🐱‍💻

???+ oneko "oneko 出没"
    <center>在本页面上，**oneko** 会跟着你一块跑动！</center>

!!! quote "一句"
    <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
    <div class="noto-serif-sc" align="center" style="font-size:18px;" id="poem_sentence"></div>
    <br>
    <div class="noto-serif-sc" align="right" style="font-size:13px;" id="poem_info"></div>
    <script type="text/javascript">
        jinrishici.load(function(result) {
            var sentence = document.querySelector("#poem_sentence")
            var info = document.querySelector("#poem_info")
            sentence.innerHTML = result.data.content
            info.innerHTML = result.data.origin.dynasty + ' ' + result.data.origin.author + '《' + result.data.origin.title + '》'
        });
    </script>

!!! note "杂谈"
    <div class="noto-serif-sc" style="font-size:30px;font-weight:bold;padding: 0 15px;">
        『
    </div>
    <div class="noto-serif-sc" style="font-family:;font-size:18px;padding: 0 70px;">
    那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。<br>
    可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。
    </div>
    <div class="noto-serif-sc" align="right" style="font-size:30px;font-weight:bold;padding: 0 15px;">
        』
    </div>     

!!! success inline "语雀"
    - 最早的笔记是记录在语雀上的，但现在准备逐步迁移了！ 
    - 我的 **[语雀](https://www.yuque.com/oneko/something)**，可以来逛逛👋🏻

!!! tip "看这里！"
    - 💡 记笔记的原因一方面是眼过一遍并不能掌握所有知识点，需要时常再回顾，另一方面是能提高我的表达能力
    - 😀 希望自己日有寸进！

!!! info "站点统计"
    <center>📑 页面数：{{pages}} </center>
    <center>✍️ 总字数：{{words}} </center>
    <center>#️⃣ 代码数：{{codes}} </center>
