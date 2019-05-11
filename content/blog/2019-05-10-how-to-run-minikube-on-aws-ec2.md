---
title: How to run minikube on AWS EC2
date: "2019-05-10T00:00:00.000Z"
description: Nếu như bạn đang học Kubernetes và cố gắng chạy Minikube trên EC2 Instance, bạn chắc chắn giống mình. Mình không thực sự thích việc cài mọi thứ trên máy tính cá nhân và dùng nó chỉ để cho học tập hay trong 1 thời gian ngắn. EC2 là 1 lựa chọn hợp lý. Nhưng mình đã rất khó khăn để chạy được Minikube trên AWS EC2 cho lần đầu tiền. Dưới đây là tổng hợp ngắn của mình về cách chạy Minikube trên AWS EC2.
tags: [aws, ec2, kubernetes, minikube]
---

<p align="center">
	<img src="../assets/minikube-logo.png" width="50"/>
</p>

Nếu như bạn đang học Kubernetes và cố gắng chạy Minikube trên EC2 Instance, bạn chắc chắn giống mình. Mình không thực sự thích việc cài mọi thứ trên máy tính cá nhân và dùng nó chỉ để cho học tập hay trong 1 thời gian ngắn. EC2 là 1 lựa chọn hợp lý. Nhưng mình đã rất khó khăn để chạy được Minikube trên AWS EC2 cho lần đầu tiền. Dưới đây là tổng hợp ngắn của mình về cách chạy Minikube trên AWS EC2.

### 1. Thiết lập 1 public EC2 Server với cấu hình sau:

