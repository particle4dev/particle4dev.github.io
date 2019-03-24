---
layout: post
title: Markdown Cheatsheet
tags: [others]
---

# Markdown Cheatsheet

### Heading Tag

{% highlight c %}

# H1
## H2
### H3
#### H4
##### H5
###### H6

{% endhighlight %}

Results:

# H1

## H2

### H3

#### H4

##### H5

###### H6

### Text

{% highlight c %}

Chữ nghiêng : 1 dấu sao  *dấu sao* hoặc 1 _gạch chân_.

Chữ đậm , 2 dấu sao **dấu sao**  hoặc 2 _gạch chân_.

Hoặc kết hợp  **dấu sao  và _gạch chân_**.

~~Gạch ngang~~

{% endhighlight %}

Results:

Chữ nghiêng : 1 dấu sao  *dấu sao* hoặc 1 _gạch chân_.

Chữ đậm , 2 dấu sao **dấu sao**  hoặc 2 _gạch chân_.

Hoặc kết hợp  **dấu sao  và _gạch chân_**.

~~Gạch ngang~~

### List

{% highlight c %}

Danh sách bình thường 
- Cách viết 1
- Cách viết 2
- Cách viết 3

Danh sách dạng số
1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
4. Ordered sub-list
5. And another item.

{% endhighlight %}

Results:

Danh sách bình thường 

- Cách viết 1
- Cách viết 2
- Cách viết 3

Danh sách dạng số

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
4. Ordered sub-list
5. And another item.

### Link

{% highlight c %}

[TextLink](https://www.google.com "alt")
hoặc viết thẳng link : https://www.google.com

{% endhighlight %}

Results:

[TextLink](https://www.google.com "alt")
hoặc viết thẳng link : https://www.google.com

### Image

{% highlight c %}

Giống Text link nhưng thêm dấu !
![alt_images](http://www.ant-solutions.tech/assets/img/favicon.png)

{% endhighlight %}

Giống Text link nhưng thêm dấu !
![alt_images](http://www.ant-solutions.tech/assets/img/favicon.png)

### Upload image, file

Drag file vào textarea :

- Mặc định hiển thị là image
- Là file chỉ cần bỏ dấu !


### Highlight code

- Mặc định tự động phát hiện ngôn ngữ.
- Với javascript
{% highlight c %}

```javascript
var a = function (){
    return "okay!";
}
```
PHP, RUBY, JAVA, PYTHON cũng tương tự.

Result:

var a = function (){
    return "okay!";
}
{% endhighlight %}

### Table

{% highlight c %}

| Samsung | Apple |
|----------------|-----------|
| galaxy 4  | iphone 5|
| galaxy | ipad 4|

{% endhighlight %}

| Samsung | Apple |
|----------------|-----------|
| galaxy 4  | iphone 5|
| galaxy | ipad 4|

### Others

{% highlight c %}

- Muốn xuống dòng 2 lần Enter
xuống

dòng
- Tạo Label
`label`

- Tạo line gạch chân header

### Hướng dẫn markdown
----

{% endhighlight %}

- Muốn xuống dòng 2 lần Enter
xuống

dòng
- Tạo Label
`label`

- Tạo line gạch chân header

### Hướng dẫn markdown
----
