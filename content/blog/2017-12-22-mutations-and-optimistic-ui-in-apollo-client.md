---
title: Mutations and Optimistic UI in Apollo Client
date: "2017-12-22T00:00:00.000Z"
tags: [graphql]
---

Apollo Client là một chức năng đơn giản của GraphQL Client, làm việc với front-end và GraphQL spec-compliant server.

Apollo cung cấp một công cụ đơn giản để làm việc với mutation khi cần giữ các bản cập nhật và hiệu chỉnh các kết quả trả về cho UI.

**I. Tạo Mutation**

Mutation trong GraphQL bao gồm hai phần:
 - Mutation sẽ call với những tham số gì?
 - Mutation sẽ trả về những kết quả gì khi thành công.

Ví dụ dưới đây sẽ sử dụng GraphQL mutation trong Apollo Client
```js
// Thiết lập những thông tin sẽ được trả về khi mutation call thành công
const graphqlMutation = gql`
  mutation ($text: String!, $list_id: ID!) {
    addNewTask(text: $text, list_id: $list_id) {
      id
      text
      completed
      createdAt
    }
  }
`
// variables - nơi truyền các tham số cần thiết cho mutation call
client.mutate({
  mutation: graphqlMutation, 
  variables: {
    text: 'walk the dog',
    list_id: '123',
  },
})
```

**II. Updating Query Results**

Sau khi mutation được thực hiện và dữ liệu đã được thay đổi trên server, người dùng mong muốn tất cả những phần UI đều được thay đổi như ý của họ.

Cách đơn giản nhất để làm điều này là refetch lại tất cả các query hiện tại.
Nhưng nếu chỉ muốn chuyển một lượng thông tin tối thiểu để xuống client để đồng bộ hóa thì cần tự xử lý các kết quả trả về và update các kết quả đó vào trong phần dữ liệu đã được lấy về từ query.

Hiện tại Apollo Client cung cấp một cách để cập nhật kết quả của mutation được trả về vào những queries có liên quan.Với cách này, ta có thể gắn đối tượng mới vào ví trí chính xác hoặc cập nhật một số field cụ thể mà không cần refetch lại tất cả.

Ví dụ về query. Ở đây query sẽ lấy danh sách của các task cho danh sách được lựa chọn ở hiện tại.
```js
query todos($list_id: ID!) {
  todo_list(id: $list_id) {
    title
    tasks {
      id
      text
      completed
      createdAt
    }
  }
}
```
Và sau đó ta gọi mutation để tạo một task mới, ta có thể dễ dàng cập nhật query ở trên với option **updateQueries**
```js
client.mutate({
  mutation: ...,  // same as above
  variables: ..., // same as above
  updateQueries: {
    todos: (previousQueryResult, { mutationResult }) => {
      return {
        title: previousQueryResult.title,
        tasks: [...previousQueryResult.tasks, mutationResult],
      };
    },
  },
});
```
Như function trong **updateQueries** ở trên (giống như một reducer function),  old query result (previousQueryResult), a new object (mutation result) sẽ được hợp vào và được trả về trong new query result.

**III. Optimistic UI**

Câu chuyện về mutation có thể kết thúc nếu độ trễ (delay) của Internet toàn cầu bằng không. Nhưng điều đó không thể xảy ra nên mọi sự giao tiếp với server đều có độ trễ nhất định.

Mà người dùng thì luôn muốn UI có thể thay đổi ngay lập tức theo từng hành động của người dùng ở trên website hoặc app.

![alt_images](https://cdn-images-1.medium.com/max/800/1*RouBLrh2fM1wYjx6Af8Gfg.png)

Apollo Client đưa ra một cách rất đơn giản để xác định những phản hồi từ máy chủ. Đó là sử dụng option **optimisticResponse** . Optimistic update luôn sẽ được hiển thị trước khi có kết quả chính xác từ server, vì thế người dùng sẽ thấy dữ liệu 'fake' ở UI cho đến khi có kết quả được trả về từ server hoặc times out.

Theo ví dụ trên ta sẽ có:
```js
client.mutate({
  mutation: ...,            // same as above
  variables: ...,           // same as above
  updateQueries: ...,       // same as above
  optimisticResponse: {
    id: generatedId,
    text: text,             // this is one of the arguments
    createdAt: +(new Date), // not accurate, but close
    completed: false,       // assume task is created not completed
  },
});
```

**IV. Minimal updates under the hood (Updating...)**

As you might have noticed, your reducer function always operates on the query result, and not some normalized format. But don’t be fooled! Internally, Apollo Client normalizes the results of both queries and mutation updates into a store, to get benefits such as query caching and consistency across the store. You can open up Redux dev-tools and inspect how Apollo Client’s integrates these results into the internal state format.

**V. Link**

- [dev-blog.apollodata.com](https://dev-blog.apollodata.com/mutations-and-optimistic-ui-in-apollo-client-517eacee8fb0)
