# Ch5. Induction & Recursion

## Induction

### Mathematical Induction

- $P(1)$
- $\forall P(k)\Rightarrow P(k+1)$
- induce $P(k+1)$

### Strong Induction

- $P(1)$
- suppose $P(j), j \in [1...k]$ is true
    - or $n\ge n_0$, i.e. $n_0=1$
- induce $P(k+1)$

<img src='https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/7X6vaR.png' alt='7X6vaR'/>

## well-ordering property (良序原理)

- Every nonempty set of nonnegative integers has a least element
- 如果要求用这个性质证明一些看起来可以用「归纳法」证明的命题，做法是：
    - 假设对于一些元素，命题不成立，这些元素的集合记为 $X$
    - $X$ 存在一个最小的元素 $x_m$ 使得命题不成立 => $x_m-1$ 成立
    - 通过 $x_m-1$ 推出 $x_m$ 时是成立的，得到矛盾

<img src='https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/dTX5oO.png' alt='dTX5oO'/>