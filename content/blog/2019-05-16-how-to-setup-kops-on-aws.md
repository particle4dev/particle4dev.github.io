---
title: How to setup K8S Cluster on AWS by using Kops
date: "2019-05-16T00:00:00.000Z"
description: Có rất nhiều cách để run Cluster K8S trên AWS như EKS hay sử dụng Kops. Kops là 1 cách đơn giản và dễ dàng customize việc cài đặt Cluster K8S. Trong bài viết này chúng ta sẽ bàn về cách sử dụng Kops để cài đặt Cluster K8S trên AWS. Đây là 1 bài viết trong loạt bài viết về K8S của mình. Hãy share và để lại comment nêú bạn cảm thấy nó hữu ích.
tags: [aws, ec2, kubernetes, cluster, kops]
---

<p align="center">
	<img src="../assets/kops-logo.jpg" width="50"/>
</p>

CẬP NHÂT: <br />


Có rất nhiều cách để run K8S trên AWS như [EKS](https://aws.amazon.com/eks/) hay sử dụng Kops. Kops là 1 cách đơn giản và dễ dàng customize  việc cài đặt K8S. Trong bài viết này chúng ta sẽ bàn về cách sử dụng Kops để cài đặt K8S trên AWS.

### 1. Yêu cầu trước khi cài đặt Cluster trên AWS

#### Cài đặt kubectl

Để cài đặt cluster, bạn phải cài đặt thành công kubectl trước. kubectl là Kubernetes command-line tool giúp bạn chạy lệnh trên Kubernetes cluster. Bạn có thể sử dụng kubectl để deploy applications, kiểm tra và quản lý tài nguyên cluster, và xem logs.

```sh
curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl
chmod +x ./kubectl
mv ./kubectl /usr/local/bin/kubectl
```

#### Cài dặt kops

```sh
KOPS_VERSION=1.12.0
curl -LO https://github.com/kubernetes/kops/releases/download/${KOPS_VERSION}/kops-darwin-amd64
chmod +x ./kops-darwin-amd64
mv ./kops-darwin-amd64 ./bin/kops
```

#### Cài đặt aws cli

Đầu tiên bạn cần 1 tài khoản AWS và 

#### Tạo route53 cho cluster

Kops sử dụng DNS cho việc tìm kiếm, cả ở bên trong cluster vì thế bạn có thể sử dụng kubernestes API server từ clients.

Kops có nhưng quan điểm mạnh mẽ về cluster name: nó phải là 1 DNS name còn hiệu lực. Bằng cách này, bạn sẽ ko bao giờ phải băn khoăn về cluster của mình, bạn có thể sẽ nó cho đồng nghiệp rõ ràng cũng như có thể truy cập vào cluster mà không cần nhớ API.

Bạn nên sử dụng subdomain để phần chia cluster của bạn. Như trong ví dụ, chúng ta sẽ sử dụng `useast1.dev.example.com`. API của server sẽ là `api.useast1.dev.example.com`.

#### Tạo S3 Bucket để lưu trũ trạng thái của Cluster

Kops cho phép bạn quản lý cluster của bạn ngay cả sau khi đã cài đặt. Để làm được điều này, kops cần phải lưu trạng thái của cluster mà bạn tạo, bên cạnh config của nó cũng như nhũng keys mà nó sử dụng. Những thông tin này sẽ được lưu trữ ở S3 bucket.

Nhiều cluster có thể được sử dụng chung 1 S3 bucket, và bạn cũng có thể share bucket này với đồng nghiệp của bạn để quản lý cùng 1 cluster - cách này thì dễ hơn việc truyền nhau những files kubecfg. Nhưng ai có quyền truy cập vào S3 bucket cũng có thể quản lý và điều khiển được tất cả các cluster. Vậy nên bạn sẽ không nên share nó cho ai ngoài team vận hành.

Nên về nguyên tắc, bạn nên tạo 1 bucket cho mỗi team vẫn hành riêng biệt.

Ở trong ví dụ của chúng ta, chúng ta chọn `dev.example.com` như là hosted zone nên hãy chọn `clusters.dev.example.com` bucket cho tên của S3 bucket.

### 2. Cài đặt K8S trên AWS


```sh
$ kops create cluster --name=k8s.fiftyline.com --state=s3://k8s.fiftyline.com --zones=us-east-1a,us-east-1b,us-east-1c,us-east-1d,us-east-1e,us-east-1f --node-count=2 --node-size=t2.micro --master-size=t2.medium --dns-zone=k8s.fiftyline.com --ssh-public-key=../.ssh/id_rsa.pub

$ kops update cluster --name k8s.fiftyline.com --state=s3://k8s.fiftyline.com --yes
```

### 3. Thay đổi cấu hình cho Node và Master

How to edit node type:

```sh
$ kops edit ig nodes --state=s3://k8s.fiftyline.com

Using cluster from kubectl context: k8s.fiftyline.com

$ kops get ig nodes --state=s3://k8s.fiftyline.com

Using cluster from kubectl context: k8s.fiftyline.com

NAME	ROLE	MACHINETYPE	MIN	MAX	ZONES
nodes	Node	t2.micro	2	2	us-east-1c

$ kops update cluster k8s.fiftyline.com --yes --state=s3://k8s.fiftyline.com

$ kops rolling-update cluster k8s.fiftyline.com --yes --state=s3://k8s.fiftyline.com
```

How to edit master type:

```sh
$ kops get ig --state=s3://k8s.fiftyline.com

Using cluster from kubectl context: k8s.fiftyline.com

NAME			ROLE	MACHINETYPE	MIN	MAX	ZONES
master-us-east-1c	Master	m3.medium	1	1	us-east-1c
nodes			Node	t2.micro	2	2	us-east-1c

$ kops edit ig master-us-east-1c --state=s3://k8s.fiftyline.com

$ kops update cluster k8s.fiftyline.com --yes --state=s3://k8s.fiftyline.com

$ kops rolling-update cluster k8s.fiftyline.com --yes --state=s3://k8s.fiftyline.com
```

### Chạy thử ứng dụng trên cluster

```sh
$ kubectl get node

NAME                            STATUS   ROLES    AGE    VERSION
ip-172-20-42-246.ec2.internal   Ready    master   85m    v1.12.7
ip-172-20-47-83.ec2.internal    Ready    node     118m   v1.12.7
ip-172-20-61-189.ec2.internal   Ready    node     111m   v1.12.7

$ kubectl run hello-minikube --image=gcr.io/google_containers/echoserver:1.4 --port=8080

kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/hello-minikube created

$ kubectl expose deployment hello-minikube --type=NodePort

service/hello-minikube exposed

$ kubectl get services

NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
hello-minikube   NodePort    100.64.87.249   <none>        8080:32471/TCP   39s
kubernetes       ClusterIP   100.64.0.1      <none>        443/TCP          157m

$ kubectl delete services hello-minikube

$ kubectl delete deployment hello-minikube
```

### x. Xóa cluster

```sh
$ kops delete cluster k8s.fiftyline.com --state=s3://k8s.fiftyline.com --yes
```

### Kết luận

### Link tham khảo

- [Installing Kubernetes on AWS with kops](https://kubernetes.io/docs/setup/custom-cloud/kops/)