# Historical Code Sinppets

!!! abstract "Source"
    <div style="text-align: center;align: center">
        <div style="vertical-align: middle;display: inline-block;">
            <a href="https://www.thiscodeworks.com/tag/historicalcode#">
                Historical Code Snippets: https://www.thiscodeworks.com/tag/historicalcode#
            </a>
        </div>
    </div>

!!! example "Historical Codes"
    <h4 style="text-align: center;font-weight:bold;" id="title"></h4>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    <pre><code id="code"></code></pre>
    <div id="history"></div>
    <div><a id="link"></a></div>

<script>
    const codes = [
        {
            "title": "Summary from Microsoft BASIC 6502 Original Source Code from 1978 written by Bill Gates and Paul Allen",
            "code": "============================================================================================\nFILE: \"david mac g5 b:m6502.asm\"\n============================================================================================\n \n000001  TITLE   BASIC M6502 8K VER 1.1 BY MICRO-SOFT\n[...]\n006955          END     $Z+START\n \nEnd of File -- Lines: 6955 Characters: 154740\n \nSUMMARY:\n \n  Total number of files : 1\n  Total file lines      : 6955\n  Total file characters : 154740\n  \n  \n \nPAUL ALLEN WROTE THE NON-RUNTIME STUFF.\nBILL GATES WROTE THE RUNTIME STUFF.\nMONTE DAVIDOFF WROTE THE MATH PACKAGE.",
            "type": "asm",
            "history": "This formatting was created by an unpublished tool by David T. Craig, who published a lot of Apple-related soure code (Apple II, Apple III, Lisa) in this format in as early as 1993, first anonymously, later with his name).\nThe filename “david mac g5 b:m6502.asm” (disk name “david mac g5 b”, file name “m6502.asm”, since it was a classic Mac OS tool) confirms David Craig’s involvement, and it means the line numbers were added no earlier than 2003.\nGiven all this, it is safe to assume the file with the Microsoft BASIC for 6502 source originated at Apple, and was given to David Craig together with the other source he published.\nThe version I posted is a reconstruction of the original file, with the header, the footer and the line numbers removed, and the spaces converted back into tabs. I chose the name “M6502.MAC” to be consistent with the MACRO-10 file extension used by the Microsoft BASIC for 8080 sources.",
            "link": "https://www.pagetable.com/?p=774"
        },
        {
            "title": "The Code that made Bitcoin",
            "code": "double AttackerSuccessProbability(double q, int z)\n{\n    double p = 1.0 - q;\n    double lambda = z * (q / p);\n    double sum = 1.0;\n    int i, k;\n    for (k = 0; k <= z; k++)\n    {\n        double poisson = exp(-lambda);\n        for (i = 1; i <= k; i++)\n            poisson *= lambda / i;\n        sum -= poisson * (1 - pow(q / p, z - k));\n    }\n    return sum;\n}",
            "type": "c++",
            "history": "This piece of code is not only why Bitcoin exists, but it's also the reason why millions trust it. It makes the chances of somebody attacking and taking over the network extremely unlikely.",
            "link": ""
        },
        {
            "title": "The Apollo 11 Lunar Module’s BAILOUT Code",
            "code": "POODOO    INHINT\n    CA  Q\n    TS  ALMCADR\n \n    TC  BANKCALL\n    CADR  VAC5STOR  # STORE ERASABLES FOR DEBUGGING PURPOSES.\n \n    INDEX  ALMCADR\n    CAF  0\nABORT2    TC  BORTENT\n \nOCT77770  OCT  77770    # DONT MOVE\n    CA  V37FLBIT  # IS AVERAGE G ON\n    MASK  FLAGWRD7\n    CCS  A\n    TC  WHIMPER -1  # YES.  DONT DO POODOO.  DO BAILOUT.\n \n    TC  DOWNFLAG\n    ADRES  STATEFLG\n \n    TC  DOWNFLAG\n    ADRES  REINTFLG\n \n    TC  DOWNFLAG\n    ADRES  NODOFLAG\n \n    TC  BANKCALL\n    CADR  MR.KLEAN\n    TC  WHIMPER",
            "type": "plaintext",
            "history": "1969: When the computer was at risk of running out of space (or “overflow”), the Apollo Guidance Computer triggered BAILOUT to schedule less important data and operations so it could keep the vital ones up and running.\nAs the Eagle lander descended toward the moon’s surface, at 30,000 feet the AGC flashed a “1202” alarm, which neither Neil Armstrong nor the flight controller in Houston immediately recognized. But in less than 30 seconds, the computer experts in Mission Control relayed that the AGC software was doing just what it was supposed to: drop lower-priority work and restart the important jobs (so quickly that it was imperceptible to the crew). Armstrong and Buzz Aldrin would continue to get what they absolutely needed from the AGC to keep on the path to touchdown.\nOverflow alarms would sound three more times before Armstrong uttered “the Eagle has landed,” but always because things worked as intended. The word “bailout” normally signals the failed end of a mission, but here it helped make humanity’s highest achievement a reality. —Ellen Stofan, John and Adrienne Mars Director, Smithsonian’s National Air and Space Museum",
            "link": "https://slate.com/technology/2019/10/consequential-computer-code-software-history.html"
        },
        {
            "title": "Google’s PageRank Algorithm from 1996 - the origin of internet search",
            "code": "import numpy as np\n \ndef pagerank(M, num_iterations=100, d=0.85):\n    N = M.shape[1]\n    v = np.random.rand(N, 1)\n    v = v / np.linalg.norm(v, 1)\n    iteration = 0\n    while iteration < num_iterations:\n        iteration += 1\n        v = d * np.matmul(M, v) + (1 - d) / N\n    return v",
            "type": "python",
            "history": "\"PageRank (PR) is an algorithm used by Google Search to rank web pages in their search engine results. PageRank was named after Larry Page, one of the founders of Google. PageRank is a way of measuring the importance of website pages.\" - Wikipedia",
            "link": "https://en.wikipedia.org/wiki/PageRank"
        },
        {
            "title": "Leftpad: 11 lines of code that broke the internet in 2016",
            "code": "module.exports = leftpad;\nfunction leftpad (str, len, ch){\n   str = String(str);\n   var i = -1;\n   if (!ch && ch !== 0) ch = ' ';\n   len = len - str.length;\n   while (++i < len){\n      str = ch + str;\n   }\n   return str;\n}",
            "history": "This story will always fascinate me. How one programmer's fight for open source against a corporate takeover led to him deleting a package nobody knew about. It crashed any site that ran javascript. A package that had just 11 lines of code.",
            "type": "javascript",
            "link": "https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/"
        },
        {
            "title": "The Morris Worm - the first code to attack the Internet",
            "code": "//PASSWORD CRACKER FUNCTION\n \nFILE *hosteq;\nchar scanbuf[512];\nchar fwd_buf[256];\nchar *fwd_host;\nchar getbuf[256];\nstruct passwd *pwent;\nchar local[20];\nstruct usr *user;\nstruct hst *host;\t\t\t\t/* 1048 */\nint check_other_cnt;\t\t\t/* 1052 */\nstatic struct usr *user_list = NULL;\nhosteq = fopen(XS(\"/etc/hosts.equiv\"), XS(\"r\"));\nif (hosteq != NULL) {\t\t\t/* 292 */\nwhile (fscanf(hosteq, XS(\"%.100s\"), scanbuf)) {\n    host = h_name2host(scanbuf, 0);\n    if (host == 0) {\n\thost = h_name2host(scanbuf, 1);\n\tgetaddrs(host);\n    }\n    if (host->o48[0] == 0)\t\t/* 158 */\n\tcontinue;\n    host->flag |= 8;\n}\nfclose(hosteq);\t\t\t\t/* 280 */\n}\n \nhosteq = fopen(XS(\"/.rhosts\"), XS(\"r\"));\nif (hosteq != NULL) {\t\t\t/* 516 */\nwhile (fgets(getbuf, sizeof(getbuf), hosteq)) { /* 344,504 */\n    if (sscanf(getbuf, XS(\"%s\"), scanbuf) != 1)\n\tcontinue;\n    host = h_name2host(scanbuf, 0);\n    while (host == 0) {\t\t\t/* 436, 474 */\n\thost = h_name2host(scanbuf, 1);\n\tgetaddrs(host);\n    }\n    if (host->o48[0] == 0)\n\tcontinue;\n    host->flag |= 8;\n}\nfclose(hosteq);\n}",
            "type": "c",
            "history": "The Morris Worm was a worm created by Cornell graduate student Robert Morris Jr. The Worm itself was initially created by Morris as an experiment in order to measure the size of the ARPANET (an early predecessor of the Internet). However a critical error in the code (we’ll talk about it below later), caused it to begin replicating itself on the same computer multiple times slowing down these already weak computers (computers at that time had a very-very small amount of storage and small amount of RAM as well) to the point of being unusable. Or in other words, the Morris Worm “accidentally” performed a DoS (Denial of Service) attack.\nAfter being sentenced to three years of probation, he went on to become a co-founder of celebrated startup incubator Y Combinator and an assistant professor of computer science at MIT.",
            "link": "https://0x00sec.org/t/examining-the-morris-worm-source-code-malware-series-0x02/685"
        }
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const snippet = codes[getRandomInt(0, codes.length - 1)];

    const title = document.querySelector('#title');
    title.textContent = snippet.title;

    const code = document.querySelector('#code');
    code.textContent = snippet.code;

    const history = document.querySelector('#history');
    history.textContent = snippet.history;

    if(!(snippet.link === "")){
        const link = document.querySelector('#link');
        link.href = snippet.link;
        link.textContent = '🔗 ' + snippet.link;
    }

</script>