# Beijing, Beijing!

## 2023-07-08

<figure markdown>
  ![](https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/Ra0ipt.jpg){width=500 loading=lazy}
  <figcaption style="font-size:12pt">摄于北海公园</figcaption>
</figure>

## 2023-07-01

<figure markdown>
  ![](https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/9pUG6v.jpg){width="500"} 
  
  ![](https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/CWLlcn.jpg){width="500"}

  ![](https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/skHe80.jpg){width="500"}
  
  <figcaption style="font-size:12pt">摄于天安门广场</figcaption>
</figure> 


<body>
    <div class="title">
        <p> Hello! 👋🏾 Can I have a triple connection?</p>
    </div>
    <div id="banner">
        <div class="img-list img-wrapper">
            <div class="img-box">
                <div class="info">
                    <h3>One click triple connection</h3>
                </div>
                <img src="./asset/image/1.png" alt="">
            </div>
            <div class="img-box">
                <div class="info">
                    <h3>One click triple connection</h3>
                </div>
                <img src="./asset/image/2.png" alt="">
            </div>
            <div class="img-box">
                <div class="info">
                    <h3>One click triple connection</h3>
                </div>
                <img src="./asset/image/3.png" alt="">
            </div>
            <div class="img-box">
                <div class="info">
                    <h3>One click triple connection</h3>
                </div>
                <img src="./asset/image/4.png" alt="">
            </div>
            <div class="img-box">
                <div class="info">
                    <h3>One click triple connection</h3>
                </div>
                <img src="./asset/image/5.png" alt="">
            </div>
            <div class="img-box" id="last-img-box">
                <div class="info">
                    <h3>One click triple connection</h3>
                </div>
                <img src="./asset/image/6.png" alt="">
            </div>
        </div>
    </div>
    <div class="btn-group">
        <button class="last btn">
            <svg t="1686471404424" class="icon left" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2373" width="128" height="128">
                <path
                    d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                    fill="" p-id="2374"></path>
            </svg>
        </button>
        <button class="next btn">
            <svg t="1686471404424" class="icon right" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2373" width="128" height="128">
                <path
                    d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
                    fill="" p-id="2374"></path>
            </svg>
        </button>
    </div>
    <script>
        const imgListOne = document.querySelector('.img-list')
        // 获取图片类数组，并将其转化为数组
        let imgBoxList = Array.prototype.slice.call(document.querySelectorAll('.img-list .img-box'))
        const imgBoxCount = imgBoxList.length
        const root = document.documentElement;
        const btnGroup = document.querySelector('.btn-group')
        const lastBtn = document.querySelector('.last')
        const nextBtn = document.querySelector('.next')
        const lastImgBox = document.getElementById('last-img-box')

        // 获取--post-spacing和--post-size的值
        const postSpacing = Number(getComputedStyle(root).getPropertyValue('--post-spacing').replace("vw", ""));
        const postSize = Number(getComputedStyle(root).getPropertyValue('--post-size').replace("vw", ""));

        // 根据图片的数量动态获取img-list的宽度
        let imgListLength = (postSize + postSpacing) * imgBoxCount
        console.log(imgListLength);
        // 根据图片的数量动态获取img-box的宽度
        const imgBoxLength = postSize + postSpacing

        let index = 0
        let indexOne = 1
        let timer = null
        let animationTime = 0.5

        // 初始化数组中元素的的顺序，将最后一张图片放在第一位与html部分图片展示位置一致
        imgBoxList.unshift(imgBoxList.pop())
        // 设置imgListOne动画时间
        imgListOne.style.transition = animationTime + 's ease'
        // 设置按钮出现时间
        setTimeout(function () {
            btnGroup.style.opacity = '1'
            btnGroup.style.bottom = '5%'
        }, animationTime * 1000)
        // 点击事件
        function cilckFun(flag) {
            //下一张 next
            if (flag == 'next') {
                index--
                console.log(index);
                // 因为右边没有显示的图片比较多，所以可以直接先整体向左移动
                imgListOne.style.left = imgBoxLength * index + "vw";
                setTimeout(function () {
                    imgListOne.style.transition = 'none'
                    // 当点击下一个累计达到图片数量时，相当于要回到原点，则重置变量和位置
                    if (Math.abs(index) == imgBoxCount) {
                        index = 0
                        imgListOne.style.left = 0
                        imgBoxList.forEach(item => {
                            if (item.id == 'last-img-box') {
                                item.style.transform = `translateX(-160.68vw)`
                            } else {
                                item.style.transform = 'none'
                            }
                        });
                    } else {
                        // 当第一张图片为last-img-box时，说明已经跑完了一轮，则将其放在最后的位置，初始状态其为-160.68vw
                        if (imgBoxList[0].id == 'last-img-box') {
                            lastImgBox.style.transition = 'none'
                            lastImgBox.style.transform = 'translateX(0px)'
                        } else if (index >= 0) {
                            /*  
                                这种情况是为了解决在点击完第last，再点击next时造成的bug问题，其实就是回退，再点击last之前
                                没有加transform属性，点击last以后则添加了transform属性，再次点击next按钮后应该不加transform
                            */
                            imgBoxList[0].style.transform = 'none'
                        } else {
                            // 正常情况下，点击next，则将最左侧的图片移到最后
                            imgBoxList[0].style.transform = 'translateX(160.68vw)'
                        }
                    }
                    // 模拟移动情况，将最左侧的图片（元素）移动到最后
                    imgBoxList.push(imgBoxList.shift())
                }, animationTime * 1000)
            } else {
                // 上一张 last
                index++
                console.log(index);
                // 模拟移动情况，把最右侧的图片（元素）移动到最前
                imgBoxList.unshift(imgBoxList.pop())
                // 因为左侧图片只会有一张，所以需要先移动图片到左侧，再进行imgListOne的移到
                if (imgBoxList[0].id == 'last-img-box' && index != 0) {
                    // 当第一张图片为last-img-box时，说明已经跑完了一轮，此时相对于一开始的位置为-321.36vw
                    imgBoxList[0].style.transform = 'translateX(-321.36vw)'
                } else if (index < 0) {
                    // 这种情况与点击next按钮出现的回退现象一致
                    imgBoxList[0].style.transform = 'none'
                } else {
                    // 正常情况下，点击last，则将最右侧的图片移到最前
                    imgBoxList[0].style.transform = 'translateX(-160.68vw)'
                }
                imgListOne.style.left = imgBoxLength * index + "vw";
                lastImgBox.style.transition = 'none'
                // 当点击下一个累计达到图片数量时，相当于要回到原点，则重置变量和位置
                if (Math.abs(index) == imgBoxCount) {
                    index = 0
                    setTimeout(function () {
                        imgListOne.style.transition = 'none'
                        imgListOne.style.left = 0
                        imgBoxList.forEach(item => {
                            if (item.id == 'last-img-box') {
                                item.style.transform = 'translateX(-160.68vw)'
                            } else {
                                item.style.transform = 'none'
                            }
                        });
                    }, animationTime * 1000)
                }
            }
            imgListOne.style.transition = animationTime + 's ease'
        }

        //节流函数
        function throttle(fn, delay) {
            return function () {
                if (timer) {
                    return
                }
                fn.apply(this, arguments)
                timer = setTimeout(() => {
                    timer = null
                }, delay)
            }
        }

        nextBtn.onclick = throttle(() => cilckFun('next'), animationTime * 1000);

        lastBtn.onclick = throttle(() => cilckFun('last'), animationTime * 1000);
    </script>
</body>