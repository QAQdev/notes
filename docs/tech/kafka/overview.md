# 0. Meet Kafka

??? ref "Kafka: The Definitive Guide"
    <center>
        <img style="width:40%" src="https://www.oreilly.com/api/v2/epubs/9781491936153/files/assets/cover.png">
    </center>
    <center>
        <a href="https://book.huihoo.com/pdf/confluent-kafka-definitive-guide-complete.pdf">[English Version]</a>
        <a href="https://yun.weicheng.men/Book/Kafka%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97.pdf">[中文版]</a>
    </center>

## Kafka 是什么

Kafka 是一个分布式流媒体平台，它最初由 LinkedIn 公司发布，使用 Scala 语言编写，并于 2010 年 12 月份开源，成为 Apache 的顶级子项目。它是一个分布式、分区的、多副本的、多订阅者，基于 Zookeeper 协调的分布式日志系统，可作为消息中间件。它的目标是提供一个统一的、高吞吐量、低延迟的平台来处理实时数据流。它可以连接到外部系统（用于数据导入/导出）通过 Kafka Connect，并提供 Kafka Streams 库用于流处理应用程序。

在我们平时的讨论里，Kafka 常常和 RabbitMQ、ActiveMQ 等消息队列一起讨论，但 Kafka 和这些传统的消息队列的区别是 Kafka 以集群的方式运行，其次 Kafka 提供了数据传递保证——可复制、持久化。

## 为什么需要 Kafka

可能看了前面的简介，我们还是不知道 Kafka 是什么，以及为什么需要 Kafka。我们来看看一些真实的业务场景。

首先我们需要了解一下发布与订阅消息系统（Publish/Subscribe Messaging）。一个典型的发布与订阅消息系统包含三个部分：发布者（Publisher）、订阅者（Subscriber）和代理（Broker）。发布者将消息发布到代理，订阅者从代理订阅消息。代理负责将消息传递给订阅者。

<img class="general-img" src='https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/4dNFXI.png' alt='4dNFXI'/>

在真实的业务中，不同的部门可能存在互相独立的发布与订阅消息系统。

<img class="general-img" src='https://raw.githubusercontent.com/QAQdev/Pics/master/uPic/SidLoo.png' alt='SidLoo'/>

随着业务的增长，公司因此要为数据队列维护多个系统，此时，真正需要的是一个 **单一的集中式** 系统，它可以用来发布通用类型的数据。

现在，结合前面的介绍，我们应该理解了为什么需要 Kafka 这样一个可以统一管理消息的基于发布与订阅的消息系统。