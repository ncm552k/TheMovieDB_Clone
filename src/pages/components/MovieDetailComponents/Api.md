# 1. Api key = 03bd541bf2f755415dbc79580980a1ff
https://cors-anywhere.herokuapp.com/
# 2. Get Movie Detailt : Lấy thông tin chi tiết của phim lẻ
## 2.1 Slug:
Link : https://www.themoviedb.org/movie/587-big-fish?language=vi
## 2.2 API :
Link : https://api.themoviedb.org/3/movie/587?api_key=03bd541bf2f755415dbc79580980a1ff&language=vi
## 2.3 Data:
```js
const data = {
"backdrop_path": "/bLqUd0tBvKezDr9MEla7k34i3rp.jpg",
"budget": 70000000,
"genres": [
        {
            "id": 12,
            "name": "Phim Phiêu Lưu"
        },
        {
            "id": 14,
            "name": "Phim Giả Tượng"
        },
        {
            "id": 18,
            "name": "Phim Chính Kịch"
        }
    ],
"id": 587,
    "imdb_id": "tt0319061",
"original_language": "en",
"original_title": "Big Fish",
"overview": "\"Nếu cá vàng chỉ sống trong bát nước, chúng sẽ mãi mãi là cá nhỏ. Nhưng nếu bơi ra biển, kích thước của chúng sẽ tăng gấp hai đến ba lần\", bài viết về cá vàng trong cuốn Bách khoa toàn thư chính là thông điệp mà Big Fish muốn nhắn gửi.\r Bộ phim Big fish (Cá lớn) của đạo diễn Tim Burton đi sâu vào một tình cảm cha con cụ thể nhưng tiêu biểu cho hàng triệu tình cảm cha con khác. Người cha Edward Bloom được nhiều người yêu mến với những câu chuyện kể về những cuộc phiêu lưu của cuộc đời mình. Từ thị trấn nhỏ Alabama, chàng trai trẻ Edward thích ngao du đã bước chân vào thế giới sôi động và rộng lớn của thành phố… Trong những câu chuyện của người cha luôn có những nhân vật phi thường: người khổng lồ, phù thủy, người sói, những chiến công kỳ ảo…",
    "popularity": 28.487,
"poster_path": "/tjK063yCgaBAluVU72rZ6PKPH2l.jpg",
    "production_companies": [
        {
            "id": 5,
            "logo_path": "/lieeAioEBVsgsoDT9HICrdt5iRa.png",
            "name": "Columbia Pictures",
            "origin_country": "US"
        },
        {
            "id": 80,
            "logo_path": null,
            "name": "The Zanuck Company",
            "origin_country": "US"
        },
        {
            "id": 2721,
            "logo_path": null,
            "name": "Jinks/Cohen Company",
            "origin_country": ""
        },
        {
            "id": 8601,
            "logo_path": null,
            "name": "Tim Burton Productions",
            "origin_country": ""
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
"release_date": "2003-12-25",
"revenue": 123218424,
"runtime": 125,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
"status": "Released",
"title": "Cá Lớn",
"vote_average": 7.765,
    "vote_count": 6485
}
```
# 2.4 Get key word : Không giống trong web lắm, nếu ko thấy thì dùng tạm
Link : https://api.themoviedb.org/3/movie/578/keywords?api_key=03bd541bf2f755415dbc79580980a1ff
```js
const data = {
    "id": 578,
    "keywords": [
        {
            "id": 818,
            "name": "based on novel or book"
        },
        {
            "id": 966,
            "name": "beach"
        },
        {
            "id": 1495,
            "name": "fishing"
        },
        {
            "id": 1913,
            "name": "atlantic ocean"
        },
}
```
# 2.5 Get Recomendation :
Link : https://api.themoviedb.org/3/movie/587/recommendations?api_key=03bd541bf2f755415dbc79580980a1ff&language=vi&page=1
```js
const data= {
  "page": 1,
  "results":"results": [
        {
            "adult": false,
            "backdrop_path": "/uNLIMPxknsV4n3IAEDpS1iqF5dm.jpg",
            "id": 162,
            "title": "Người Kéo Học Yêu",
            "original_language": "en",
            "original_title": "Edward Scissorhands",
            "overview": "Phim kể về Edward Scissorhands (Johnny Depp) - một \"sản phẩm\" có bàn tay gắn đầy kéo được tạo ra bởi nhà khoa học điên loạn. Anh rơi vào tình yêu với Kim Boggs (do Winona Ryder thủ vai) dù cô đã có bạn trai. Kể từ đó, Edward bắt đầu hành trình chinh phục trái tim người đẹp và nhờ đó hiểu hơn về chính mình.",
            "poster_path": "/e0FqKFvGPdQNWG8tF9cZBtev9Em.jpg",
            "media_type": "movie",
            "genre_ids": [
                14,
                18,
                10749
            ],
            "popularity": 44.199,
            "release_date": "1990-12-05",
            "video": false,
            "vote_average": 7.714,
            "vote_count": 11610
        },
  ]
```
# 2.6 Get Review
Link : https://api.themoviedb.org/3/movie/587/reviews?api_key=03bd541bf2f755415dbc79580980a1ff&language=en-US&page=1
```js
{
  "id": 587,
  "page": 1,
  "results": [
    {
      "author": "JPV852",
      "author_details": {
        "name": "",
        "username": "JPV852",
        "avatar_path": "/xNLOqXXVJf9m7WngUMLIMFsjKgh.jpg",
        "rating": 9.0
      },
      "content": "First time seeing this since probably 2003 in theaters and it's absolutely heartfelt and charming, probably one of Tim Burton's best films, or at least one of my personal favorites of his. Great performances all around but especially Ewan McGregor and Albert Finney. Really well done. **4.5/5**",
      "created_at": "2021-05-14T18:54:29.886Z",
      "id": "609ec76580729800401589ae",
      "updated_at": "2021-06-23T15:58:55.863Z",
      "url": "https://www.themoviedb.org/review/609ec76580729800401589ae"
    }
  ],
  "total_pages": 1,
  "total_results": 1
}
```
# 2.7 Get Actor of movie
Link : https://api.themoviedb.org/3/movie/587/credits?api_key=03bd541bf2f755415dbc79580980a1ff&language=en-US
```js
{
    "id": 587,
     "cast": [
        {
            "adult": false,
            "gender": 2,
            "id": 3061,
            "known_for_department": "Acting",
            "name": "Ewan McGregor",
            "original_name": "Ewan McGregor",
            "popularity": 39.666,
            "profile_path": "/aEmyadfRXTmmR7UW7OXsm5a6smS.jpg",
            "cast_id": 5,
            "character": "Younger Ed Bloom",
            "credit_id": "52fe4258c3a36847f8016fff",
            "order": 0
        },
        {
            "adult": false,
            "gender": 2,
            "id": 3926,
            "known_for_department": "Acting",
            "name": "Albert Finney",
            "original_name": "Albert Finney",
            "popularity": 10.117,
            "profile_path": "/8WCFO9lMHel1bHVYl5lj8pYEw2s.jpg",
            "cast_id": 24,
            "character": "Older Ed Bloom",
            "credit_id": "52fe4258c3a36847f801706f",
            "order": 1
        }
     ],
     cew:[
        {
            "adult": false,
            "gender": 2,
            "id": 8215,
            "known_for_department": "Production",
            "name": "Bruce Cohen",
            "original_name": "Bruce Cohen",
            "popularity": 1.564,
            "profile_path": "/v40byHjEBXfuBj2OuqvM5YGPF6E.jpg",
            "credit_id": "52fe4258c3a36847f8017005",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 2,
            "id": 8216,
            "known_for_department": "Production",
            "name": "Dan Jinks",
            "original_name": "Dan Jinks",
            "popularity": 1.4,
            "profile_path": null,
            "credit_id": "52fe4258c3a36847f8017011",
            "department": "Production",
            "job": "Producer"
        },
        {
            "adult": false,
            "gender": 1,
            "id": 2215,
            "known_for_department": "Production",
            "name": "Denise Chamian",
            "original_name": "Denise Chamian",
            "popularity": 8.793,
            "profile_path": "/hLJGCOnjoIEKpXRykMU9QuRxjBs.jpg",
            "credit_id": "52fe4258c3a36847f8017035",
            "department": "Production",
            "job": "Casting"
        },
     ]
```
# 2.8 Get url image
```js
const url = https://image.tmdb.org/t/p/w500/url
const backGround :https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/bLqUd0tBvKezDr9MEla7k34i3rp.jpg
const poster:https://www.themoviedb.org/t/p/w1280/tjK063yCgaBAluVU72rZ6PKPH2l.jpg
const actor:https://www.themoviedb.org/t/p/w276_and_h350_face/aEmyadfRXTmmR7UW7OXsm5a6smS.jpg
```
# 2.9 Get list backdrops
Link : https://api.themoviedb.org/3/movie/587/images?api_key=03bd541bf2f755415dbc79580980a1ff
```js
{
  "backdrops": [
    {
      "aspect_ratio": 1.778,
      "height": 2160,
      "iso_639_1": null,
      "file_path": "/bLqUd0tBvKezDr9MEla7k34i3rp.jpg",
      "vote_average": 5.456,
      "vote_count": 5,
      "width": 3840
    },
    {
      "aspect_ratio": 1.778,
      "height": 2160,
      "iso_639_1": null,
      "file_path": "/tjKDqLWCSIJwiSXgU5aJo6taSII.jpg",
      "vote_average": 5.312,
      "vote_count": 1,
      "width": 3840
    },
  ]
}
```
# 2.9 Get Credits
Link : https://api.themoviedb.org/3/movie/587/credits?api_key=03bd541bf2f755415dbc79580980a1ff&language=en-US
# 2.10 Get trailer
Link : https://api.themoviedb.org/3/movie/545611/videos?api_key=03bd541bf2f755415dbc79580980a1ff
# 3. Get TV Detailt : Lấy thông tin chi tiết của phim Bộ


có thể xuất hiện khi truy cập vào một tài nguyên trên mạng bị chặn bởi chính sách liên quan đến Cross-Origin Resource Sharing (CORS). CORS là một cơ chế bảo mật trong trình duyệt web giúp ngăn chặn các trang web khác nhau truy cập vào dữ liệu của nhau một cách trái phép.
Middleware serializableCheck được cung cấp bởi Redux Toolkit và sẽ giúp bạn kiểm tra và cảnh báo khi bạn cố gắng truyền vào một giá trị không thể chuyển đổi được vào action. Để thêm middleware này, bạn có thể làm như sau:

javascript
Copy code
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {...},
  middleware: [...getDefaultMiddleware({serializableCheck: false}), /* other middleware */],
  devTools: process.env.NODE_ENV !== 'production',
});
Trong ví dụ trên, chúng ta đã thêm middleware serializableCheck vào store bằng cách truyền đối tượng getDefaultMiddleware với thuộc tính serializableCheck được thiết lập là false. Việc này sẽ tắt thông báo lỗi của serializableCheck nhưng vẫn cho phép Redux Toolkit hoạt động bình thường.

Nếu bạn muốn bật thông báo lỗi của serializableCheck, bạn có thể thiết lập serializableCheck là true hoặc không cần thiết lập thuộc tính này vì giá trị mặc định của nó là true. Tuy nhiên, khi bật thông báo lỗi, bạn cần đảm bảo rằng tất cả các giá trị được truyền vào các action đều là giá trị có thể chuyển đổi được sang định dạng chuỗi.


linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%);
}


31.5 10.5 10.5
239 206 201

96    66    69

188    200    213
136.5, 178.5, 220.5

Mảng poster chứa nh
